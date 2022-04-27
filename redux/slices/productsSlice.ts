import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
// const API = axios.create({
//   baseURL: process.env.REACT_APP_URL_API + 'api/v1',
// })

// const getToken = () => {
//   const {token} = JSON.parse(localStorage.getItem('token'))
//   return token
// }

export const testApi = async () => {
  const re = await fetch(
    'http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1',
  ).then((res) => res.json())
  return re
}

export const getListProduct = createAsyncThunk(
  'products/getListProduct',
  async (params: object) => {
    return await fetch(
      `http://localhost:3001/api/product?filter=${JSON.stringify(params)}`,
    ).then((res) => res.json())
  },
)

export const getTotalProduct = createAsyncThunk(
  'products/getTotalProduct',
  async () => {
    return await fetch(`http://localhost:3001/api/product/count`).then((res) =>
      res.json(),
    )
  },
)

export const addProduct = createAsyncThunk(
  'products/addProduct',
  async (formData: FormData) => {
    return await fetch('http://localhost:3001/api/product/new', {
      method: 'POST',
      body: formData,
    }).then((res) => res.json())
  },
)

export const deleteProduct = createAsyncThunk(
  'products/deleteProduct',
  async (idProduct) => {
    return await fetch('http://localhost:3001/api/product/', {
      method: 'DELETE',
      body: JSON.stringify(idProduct),
    }).then((res) => res.json())
  },
)

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [
      // {
      //   name: 'ổi lê ruột đỏ',
      //   price: 68000,
      //   discount: 40,
      //   img: '//bizweb.dktcdn.net/thumb/large/100/431/449/products/sp22.jpg?v=1628522988000',
      //   id: 1,
      //   quantity: 1,
      // },
      // {
      //   name: 'Trái cam mật',
      //   price: 70000,
      //   discount: 20,
      //   img: '//bizweb.dktcdn.net/thumb/large/100/431/449/products/sp5.jpg?v=1625548796000',
      //   id: 2,
      //   quantity: 1,
      // },
      // {
      //   name: 'Dâu tây',
      //   price: 18000,
      //   discount: 20,
      //   img: '//bizweb.dktcdn.net/thumb/large/100/431/449/products/sp3.jpg?v=1628523053000',
      //   id: 6,
      //   quantity: 1,
      // },
      // {
      //   name: 'Chanh tươi',
      //   price: 40000,
      //   discount: 20,
      //   img: '//bizweb.dktcdn.net/thumb/large/100/431/449/products/sp6.jpg?v=1625548895000',
      //   id: 3,
      //   quantity: 1,
      // },
      // {
      //   name: 'Chanh tươi',
      //   price: 40000,
      //   discount: 20,
      //   img: '//bizweb.dktcdn.net/thumb/large/100/431/449/products/sp6.jpg?v=1625548895000',
      //   id: 3,
      //   quantity: 1,
      // },
      // {
      //   name: 'Chanh tươi',
      //   price: 40000,
      //   discount: 20,
      //   img: '//bizweb.dktcdn.net/thumb/large/100/431/449/products/sp6.jpg?v=1625548895000',
      //   id: 4,
      //   quantity: 1,
      // },
    ],
    totalCount: 0,
    loadding: false,
  },
  reducers: {},

  extraReducers: (builder) => {
    //getListProduct
    builder.addCase(getListProduct.pending, (state) => {
      state.loadding = true
    })
    builder.addCase(getListProduct.fulfilled, (state, action) => {
      state.loadding = false
      state.products = action.payload
    })
    builder.addCase(getListProduct.rejected, (state) => {
      state.loadding = false
    })

    //getTotalProduct
    builder.addCase(getTotalProduct.pending, (state) => {
      state.loadding = true
    })
    builder.addCase(getTotalProduct.fulfilled, (state, action) => {
      state.loadding = false
      state.totalCount = action.payload
    })
    builder.addCase(getTotalProduct.rejected, (state) => {
      state.loadding = false
    })

    //addProduct
    builder.addCase(addProduct.pending, (state) => {
      state.loadding = true
    })
    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.loadding = false
      state.products.push(action.payload)
    })
    builder.addCase(addProduct.rejected, (state) => {
      state.loadding = false
    })

    //deleteProduct
    builder.addCase(deleteProduct.pending, (state) => {
      state.loadding = true
    })
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.loadding = false
      const objIndex = state.products.findIndex(
        (obj) => obj.id == action.payload.id,
      )
      state.products.splice(objIndex, 1)
    })
    builder.addCase(deleteProduct.rejected, (state) => {
      state.loadding = false
    })
  },
})

export const {reducer, actions} = productsSlice
export default reducer
