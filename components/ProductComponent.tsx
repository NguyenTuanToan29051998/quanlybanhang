import React, {Dispatch, FC, SetStateAction, useEffect, useState} from 'react'
import {Product} from '../models/product'
import {useAppDispatch, useAppSelector} from '../redux/hook'
import {addItemToCart} from '../redux/slices/cartSlice'
import {useRouter} from 'next/router'
import Image from 'next/image'

interface Props {
  data: Product
  index: number
}

export const ProductComponent: FC<Props> = ({data, index}: Props) => {
  const [clName, setClName] = useState('opacity-0 -bottom-1/4')
  const dispatch = useAppDispatch()
  const router = useRouter()
  // const {list} = useAppSelector((state) => state.products)
  // console.log(list)

  // useEffect(() => {
  //   // console.log(list, 'testapi')
  //   async function fetchList() {
  //     const response = await fetch(
  //       'http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1',
  //     )
  //     const responseJSON = await response.json()
  //     console.log({responseJSON})
  //   }
  //   fetchList()
  // }, [])
  return (
    <div
      className={`col-start-${index} col-span-1`}
      onMouseEnter={() => setClName('opacity-100 bottom-2.5')}
      onMouseLeave={() => setClName('opacity-0 -bottom-1/4')}>
      <div className="w-1/4 rounded-tl-10px rounded-br-10px bg-orange-#F14E18 text-center text-white">
        <span>-{data.discount}%</span>
      </div>
      <div className="relative z-0 overflow-hidden text-center hover:cursor-pointer">
        <img
          className="ml-[5%] flex w-[90%] bg-white hover:scale-105 hover:duration-500"
          src={data.img ? data.img.split(',')[data.display - 1] : 'img'}
          alt={data.name}
          // height={320}
          // layout="intrinsic"
          onClick={() => router.push('/user/detail_product')}
        />
        <div
          className={`${clName} absolute grid h-10 w-full grid-cols-4 justify-items-center duration-500`}>
          <a
            className={`col-span-1 col-start-2 ml-[15%]  grid  w-10 place-items-center rounded-25px bg-red-#eb3e32 text-white hover:bg-orange-#ffb416`}
            title="Th??m v??o y??u th??ch">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 stroke-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </a>
          <a
            className={`col-span-1 col-start-3 mr-[15%] grid w-10 place-items-center rounded-25px bg-green-3ba66b text-white hover:bg-orange-#ffb416`}
            title="Th??m v??o gi??? h??ng"
            onClick={() => {
              dispatch(addItemToCart(data))
            }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 stroke-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="relative z-20 mx-[10px] bg-white text-center">
        <div className="cursor-pointer hover:text-orange-#ffb416">
          <a href="/dao-do-my" title={data.name}>
            {data.name}
          </a>
        </div>

        <div className="pb-4">
          <span className="pr-2 text-[15px] text-red-#eb3e32 ">
            {(data.discount
              ? Number(data.exitPrice) -
                (Number(data.exitPrice) * Number(data.discount)) / 100
              : ''
            ).toLocaleString('it-IT', {
              style: 'currency',
              currency: 'VND',
            })}
          </span>
          <span className="text-[15px] line-through">
            {Number(data.exitPrice).toLocaleString('it-IT', {
              style: 'currency',
              currency: 'VND',
            })}
          </span>
        </div>
      </div>
    </div>
  )
}
