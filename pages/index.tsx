import type {NextPage} from 'next'
import {useEffect, useState} from 'react'
import {useAppDispatch, useAppSelector} from '../redux/hook'
import {ProductComponent} from '../components/ProductComponent'
import everyone from '../hocs/everyone'
import {Product} from '../models/product'
import {useRouter} from 'next/router'

const Home: NextPage = () => {
  const products = useAppSelector((state) => state.products.products)
  const router = useRouter()
  return (
    <div>
      <button
        className="border bg-green-100"
        onClick={() => router.push('user/add_product')}>
        Button
      </button>
      <button
        className="ml-10 border bg-green-100"
        onClick={() => router.push('user/form_product')}>
        Form
      </button>
      <div className="relative pt-10">
        <h2 className="absolute right-0 top-0 left-0 flex justify-center font-bold">
          <a
            className="flex rounded-[50px] bg-white px-[35px] py-[20px] text-4xl text-[#3e4a5e] shadow-[0px_0px_17px_8px_rgb(0,0,0,0.05)] hover:text-orange-#ffb416"
            href="#"
            title="Ưu đãi trong tuần">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-3 h-9 w-9 self-center text-[#f34923] "
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                fillRule="evenodd"
                d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                clipRule="evenodd"
              />
            </svg>
            Ưu đãi trong tuần
          </a>
        </h2>
        <div className="mx-auto grid max-w-screen-lg grid-flow-col rounded-25px border-2 border-red-600 pt-12">
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
            {products.slice(0, 4).map((item, index) => {
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
          <div className="grid grid-cols-6 gap-5">
            {products.map((item, index) => {
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
