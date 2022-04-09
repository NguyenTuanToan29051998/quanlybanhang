import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit'
import {createWrapper} from 'next-redux-wrapper'
import cartReducer from './slices/cartSlice'
import productsReducer from './slices/productsSlice'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >

const makeStore = () => store

export const wrapper = createWrapper(makeStore)
