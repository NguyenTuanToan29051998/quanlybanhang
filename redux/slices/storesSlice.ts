import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const getToken = () => {
  const {token} = JSON.parse(localStorage.getItem('token'))
  return token
}

export const addtStore = createAsyncThunk(
  'stores/addtStore',
  async (params: object) => {
    return await axios
      .post('http://localhost:3001/api/store', params, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      .then((res) => {
        return res.data
      })
  },
)

export const getListStore = createAsyncThunk(
  'stores/getListStore',
  async () => {
    return await axios
      .get('http://localhost:3001/api/store', {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      .then((res) => {
        return res.data
      })
  },
)

export const getStoreById = async (idStore) => {
  return await axios
    .get(`http://localhost:3001/api/store/${idStore}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    })
    .then((res) => res.data)
}

export const updateStoreById = createAsyncThunk(
  'stores/updateStoreById',
  async (params: object) => {
    // const idStore = params.id
    // return await axios
    //   .patch(`http://localhost:3001/api/store/${idStore}`, params, {
    //     headers: {
    //       Authorization: `Bearer ${getToken()}`,
    //     },
    //   })
    //   .then((res) => {
    //     return res.data
    //   })
  },
)

const storesSlice = createSlice({
  name: 'stores',
  initialState: {
    stores: [],
    loadding: false,
  },
  reducers: {},

  extraReducers: (builder) => {
    //get list store
    builder.addCase(getListStore.pending, (state) => {
      state.loadding = true
    })
    builder.addCase(getListStore.fulfilled, (state, action) => {
      state.loadding = false
      state.stores = action.payload
    })
    builder.addCase(getListStore.rejected, (state) => {
      state.loadding = false
    })

    //add store
    builder.addCase(addtStore.pending, (state) => {
      state.loadding = true
    })
    builder.addCase(addtStore.fulfilled, (state, action) => {
      state.loadding = false
      state.stores.push(action.payload)
    })
    builder.addCase(addtStore.rejected, (state) => {
      state.loadding = false
    })

    // update store
    builder.addCase(updateStoreById.pending, (state) => {
      state.loadding = true
    })
    builder.addCase(updateStoreById.fulfilled, (state, action) => {
      state.loadding = false
      console.log(action.payload, 'payload')
    })
    builder.addCase(updateStoreById.rejected, (state) => {
      state.loadding = false
    })
  },
})

export const {reducer, actions} = storesSlice
export default reducer
