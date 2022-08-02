import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ProductState = {
  map: any;
  id: string;
  name: string;
  count: number;
  price: number;
  isFavourite: boolean;
  favouriteId:string;
  p_id:string;
};

interface CategoryState {
  categories: Array<ProductState>;
  
}

const initialState = {
    categories: [],
    orders:[]
}

export const CategoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        getCategoriesData: (state: any, action: PayloadAction<any>) => {
            state.categories = action.payload
        },
        increment: (state: any, action: PayloadAction<any>) => {
            const product = state.categories.find((p:any) => p.id === action.payload);
            if('count' in product){
                product.count = product.count + 1;
              }else{
                product.count = 1;
              }
        },
        decrement: (state: any, action: PayloadAction<any>) => {
            const product = state.categories.find((p:any) => p.id === action.payload);
            if('count' in product){
                product.count = product.count - 1;
              }else{
                product.count = 1;
              }
        },
        addFavourite: (state: any, action: PayloadAction<ProductState>) => {
          const product = state.categories.find(
            (p: {id: any}) => p.id === action.payload.p_id,
          );
          product.isFavourite = !product.isFavourite;
          product.favouriteId = action.payload.favouriteId;
        },

        addToCart: (state: any, action: PayloadAction<ProductState>) => {
          const itemIndex = state.categories.find((item:any) => item.id === action.payload);
                 const dupItem = state.categories.find((i:any) => i.id === action.payload) 
 
                 if(dupItem) {
                   itemIndex.count = itemIndex.count + 1
                 }
                 else {
                  state.categories.push(itemIndex)
                 }
         },

         getAllOrders: (state: any, action: PayloadAction<ProductState>) => {
                        state.orders = action.payload
         },


         AllFavourites: (state: any, action: PayloadAction<ProductState>) => {
          const tempData:any = state.categories;

          const newData = tempData.map((i:any) => {
          const favData = action.payload.map((p:any) => {
            if(i.id === p.p_id){
              i.isFavourite = true
              i.favouriteId = p.id
            }
          })
          })
          state.categories = tempData;
         }
     }

    }
)

export const { getCategoriesData, increment, decrement, addFavourite, addToCart, AllFavourites, getAllOrders} = CategoriesSlice.actions;
export default CategoriesSlice.reducer;