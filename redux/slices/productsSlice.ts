import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
// const API = axios.create({
//   baseURL: process.env.REACT_APP_URL_API + 'api/v1',
// })

// export const testApi = async () => {
//   const re = await fetch(
//     'http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1',
//   ).then((res) => res.json())
//   return re
// }

export const testApi = createAsyncThunk(
  'products/testApi',
  async (objProduct: object) => {
    console.log(objProduct, 'objslice')
    return await fetch('http://localhost:3001/api/product', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(objProduct),
    }).then((res) => res.json())
  },
)

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [
      {
        name: 'ổi lê ruột đỏ',
        price: 68000,
        discount: 40,
        img: '//bizweb.dktcdn.net/thumb/large/100/431/449/products/sp22.jpg?v=1628522988000',
        id: 1,
        quantity: 1,
      },
      {
        name: 'Trái cam mật',
        price: 70000,
        discount: 20,
        img: '//bizweb.dktcdn.net/thumb/large/100/431/449/products/sp5.jpg?v=1625548796000',
        id: 2,
        quantity: 1,
      },
      {
        name: 'Dâu tây',
        price: 18000,
        discount: 20,
        img: '//bizweb.dktcdn.net/thumb/large/100/431/449/products/sp3.jpg?v=1628523053000',
        id: 6,
        quantity: 1,
      },
      {
        name: 'Chanh tươi',
        price: 40000,
        discount: 20,
        img: '//bizweb.dktcdn.net/thumb/large/100/431/449/products/sp6.jpg?v=1625548895000',
        id: 3,
        quantity: 1,
      },
      {
        name: 'Chanh tươi',
        price: 40000,
        discount: 20,
        img: '//bizweb.dktcdn.net/thumb/large/100/431/449/products/sp6.jpg?v=1625548895000',
        id: 3,
        quantity: 1,
      },
      {
        name: 'Chanh tươi',
        price: 40000,
        discount: 20,
        img: '//bizweb.dktcdn.net/thumb/large/100/431/449/products/sp6.jpg?v=1625548895000',
        id: 4,
        quantity: 1,
      },
    ],
    list: [],
    loadding: false,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(testApi.pending, (state) => {
      state.loadding = true
    })
    builder.addCase(testApi.fulfilled, (state, action) => {
      state.loadding = false
      state.list = action.payload
    })
    builder.addCase(testApi.rejected, (state) => {
      state.loadding = false
    })
  },
})

export const {reducer, actions} = productsSlice
export default reducer
