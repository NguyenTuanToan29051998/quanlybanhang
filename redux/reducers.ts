import {combineReducers} from '@reduxjs/toolkit'
import cartReducer from './slices/cartSlice'
import productsReducer from './slices/productsSlice'
import loginReducer from './slices/loginSlice'
import storeReducer from './slices/storesSlice'

export default combineReducers({
  cart: cartReducer,
  products: productsReducer,
  token: loginReducer,
  stores: storeReducer,
})
