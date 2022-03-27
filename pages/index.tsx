import type {NextPage} from 'next'
import {useEffect} from 'react'

import {ProductComponent} from '../components/ProductComponent'
import everyone from '../hocs/everyone'
import {Product} from '../models/product'

const listProducts: Product[] = [
  {
    name: 'ổi lê ruột đỏ',
    price: 68000,
    discount: 40,
    img: '//bizweb.dktcdn.net/thumb/large/100/431/449/products/sp22.jpg?v=1628522988000',
  },
  {
    name: 'Trái cam mật',
    price: 70000,
    discount: 20,
    img: '//bizweb.dktcdn.net/thumb/large/100/431/449/products/sp5.jpg?v=1625548796000',
  },
  {
    name: 'Dâu tây',
    price: 18000,
    discount: 20,
    img: '//bizweb.dktcdn.net/thumb/large/100/431/449/products/sp3.jpg?v=1628523053000',
  },
  {
    name: 'Chanh tươi',
    price: 40000,
    discount: 20,
    img: '//bizweb.dktcdn.net/thumb/large/100/431/449/products/sp6.jpg?v=1625548895000',
  },
  {
    name: 'Chanh tươi',
    price: 40000,
    discount: 20,
    img: '//bizweb.dktcdn.net/thumb/large/100/431/449/products/sp6.jpg?v=1625548895000',
  },
  {
    name: 'Chanh tươi',
    price: 40000,
    discount: 20,
    img: '//bizweb.dktcdn.net/thumb/large/100/431/449/products/sp6.jpg?v=1625548895000',
  },
]

const Home: NextPage = () => {
  return (
    <div>
      <div className="pt-10">
        <div className="mx-auto grid max-w-screen-lg grid-flow-col rounded-25px border-2 border-red-600 py-5">
          <div className="self-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </div>
          <div className="grid grid-flow-col divide-x-[1px]">
            {listProducts.slice(0, 4).map((item, index) => {
              return (
                <>
                  <div className="pl-2">
                    <ProductComponent data={item} index={index + 1} />
                  </div>
                </>
              )
            })}
          </div>

          <div className="self-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="pt-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-6 gap-6">
            {listProducts.map((item, index) => {
              return (
                <>
                  <div className="rounded-10px border">
                    <ProductComponent data={item} index={index + 1} />
                  </div>
                </>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default everyone(Home)
