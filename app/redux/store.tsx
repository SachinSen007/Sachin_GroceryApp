import {configureStore} from '@reduxjs/toolkit';
import CategoriesReducer from '../redux/CategoriesSlice';

export const store = configureStore({
      reducer: CategoriesReducer
  })
  
  export type RootState = ReturnType<typeof store.getState>
  export type AppDispatch = typeof store.dispatch