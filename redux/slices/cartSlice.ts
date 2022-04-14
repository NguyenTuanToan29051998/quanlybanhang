import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    status: null,
  },
  reducers: {
    initCart: (state) => {
      const cartItems = localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems') || '')
        : []
      state.cartItems = cartItems
    },
    // saveStore: (state) => {
    //   localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    // },
    addItemToCart: (state, action) => {
      const objIndex = state.cartItems.findIndex(
        (obj) => obj.id == action.payload.id,
      )
      if (objIndex >= 0) {
        state.cartItems[objIndex].quantity += 1
      } else {
        state.cartItems.push(action.payload)
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },
    removeItemFromCart: (state, action) => {
      const objIndex = state.cartItems.findIndex(
        (obj) => obj.id == action.payload.id,
      )
      state.cartItems.splice(objIndex, 1)
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },
    addQuantity: (state, action) => {
      const objIndex = state.cartItems.findIndex(
        (obj) => obj.id == action.payload.id,
      )
      state.cartItems[objIndex].quantity += 1
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },
    substractQuantity: (state, action) => {
      const objIndex = state.cartItems.findIndex(
        (obj) => obj.id == action.payload.id,
      )
      if (state.cartItems[objIndex].quantity !== 1) {
        state.cartItems[objIndex].quantity -= 1
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },
  },
})

export const {reducer, actions} = cartSlice
export const {
  addItemToCart,
  removeItemFromCart,
  addQuantity,
  substractQuantity,
  initCart,
} = actions
export default reducer
