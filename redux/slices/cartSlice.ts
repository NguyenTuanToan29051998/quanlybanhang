import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'myCart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      console.log(action.payload, 'vvv')
      state.push(action.payload as never)
    },
  },
})

export const {reducer, actions} = cartSlice
export const {addToCart} = actions
export default reducer
