import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

export const getTokenLogin = createAsyncThunk(
  'login/getTokenLogin',
  async (params: object) => {
    return await axios
      .post('http://localhost:3001/api/accounts/login', params)
      .then((res) => {
        return res.data
      })
      .catch((err) => {
        if (err.response.status == 422) {
          alert('Mật khẩu phải lớn hơn 6 ký tự')
        } else {
          alert('Tên tài khoản hoặc mật khẩu không đúng')
        }
      })
  },
)

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    token: '',
    loadding: false,
  },
  reducers: {},

  extraReducers: (builder) => {
    //get token logic
    builder.addCase(getTokenLogin.pending, (state) => {
      state.loadding = true
    })
    builder.addCase(getTokenLogin.fulfilled, (state, action) => {
      state.loadding = false
      state.token = action.payload
      localStorage.setItem('token', JSON.stringify(state.token))
    })
    builder.addCase(getTokenLogin.rejected, (state) => {
      state.loadding = false
    })
  },
})

export const {reducer, actions} = loginSlice
export default reducer
