import {combineReducers} from '@reduxjs/toolkit'
import cartReducer from './slices/cartSlice'
import productsReducer from './slices/productsSlice'

export default combineReducers({
  cart: cartReducer,
  products: productsReducer,
})
