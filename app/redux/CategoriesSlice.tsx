import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ProductState = {
  id: string;
  name: string;
  count: number;
  price: number;
  isFavourite: boolean;
};

interface CategoryState {
  categories: Array<ProductState>;
}

const initialState = {
    categories: [],
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
            (p: {id: any}) => p.id === action.payload,
          );
          product.isFavourite = !product.isFavourite;
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
    }
})

export const { getCategoriesData, increment, decrement, addFavourite, addToCart} = CategoriesSlice.actions;
export default CategoriesSlice.reducer;