import {createSlice} from '@reduxjs/toolkit'

const productsSlice = createSlice({
  name: 'myProducts',
  initialState: [
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
  reducers: {},
})

export const {reducer, actions} = productsSlice
export default reducer
