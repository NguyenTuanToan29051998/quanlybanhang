import {createSlice} from '@reduxjs/toolkit'

export interface cartInitialState {
  name: string
  price: number
  discount: number
  img: string
  id: number
}

// const initialState: cartInitialState = [
//   {
//     name: '',
//     price: 0,
//     discount: 0,
//     img: '',
//     id: 0,
//   },
// ]

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    // cartItems:
    //   localStorage && localStorage.getItem('cartItems')
    //     ? JSON.parse(localStorage.getItem('cartItems') || '')
    //     : [],
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
  },
  reducers: {
    initCart: (state) => {
      const cartItems = localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems') || '')
        : []
      state.cartItems = cartItems
      state.cartItems.map((item) => {
        state.cartTotalQuantity += item.quantity
        state.cartTotalAmount += item.quantity * item.price
      })
    },
    // saveStore: (state) => {
    //   localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    // },
    addItemToCart: (state, action) => {
      const objIndex = state.cartItems.findIndex(
        (obj) => obj.id == action.payload.id,
      )
      console.log(objIndex, 'xxx')

      if (objIndex >= 0) {
        state.cartItems[objIndex].quantity += 1
      } else {
        state.cartItems.push(action.payload)
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
      state.cartTotalQuantity++
      state.cartTotalAmount += action.payload.price
    },
    removeItemFromCart: (state, action) => {
      const objIndex = state.cartItems.findIndex(
        (obj) => obj.id == action.payload.id,
      )
      state.cartItems.splice(objIndex, 1)
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
      state.cartTotalQuantity -= action.payload.quantity
      state.cartTotalAmount -= action.payload.price * action.payload.quantity
    },
    addQuantity: (state, action) => {
      const objIndex = state.cartItems.findIndex(
        (obj) => obj.id == action.payload.id,
      )
      state.cartItems[objIndex].quantity += 1
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
      state.cartTotalQuantity++
      state.cartTotalAmount += action.payload.price
    },
    substractQuantity: (state, action) => {
      const objIndex = state.cartItems.findIndex(
        (obj) => obj.id == action.payload.id,
      )
      if (state.cartItems[objIndex].quantity !== 1) {
        state.cartItems[objIndex].quantity -= 1
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
      state.cartTotalQuantity--
      state.cartTotalAmount -= action.payload.price
    },
    // getTotals: (state) => {
    //   state.cartItems.reduce(
    //     (cartTotal, cartItem) => {
    //       const {price, quantity} = cartItem
    //       // const itemTotal = price * cartQuantity
    //       // state.cartTotalAmount += price * quantity
    //       // state.cartTotalQuantity += quantity
    //       // console.log(price, 'cartTotal')
    //       // console.log(price * quantity, 'cartItem')
    //     },
    //     // {
    //     //   total: 0,
    //     //   quantity: 0,
    //     // },
    //   )
    //   // state.cartTotalQuantity = quantity
    //   // state.cartTotalAmount = total
    //   // console.log(state.cartTotalQuantity, 'v')
    // },
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
