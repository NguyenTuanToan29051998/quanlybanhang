import React, {FC, useState} from 'react'
import Image from 'next/image'

export const Favourite: FC = () => {
  return (
    <div>
      <div className="bg-green-3ba66b">
        <div className="container mx-auto">
          <div className="grid h-[120px] grid-cols-12">
            <div className="col-span-4 col-start-1 self-center">
              <ul className="grid grid-cols-5 justify-items-center gap-4">
                <li className=" ">
                  <a
                    href="#"
                    className=" text-sm font-medium text-white hover:text-orange-#ffb416">
                    Trang chủ
                  </a>
                </li>
                <li className="">
                  <a
                    href="#"
                    className=" text-sm font-medium text-white hover:text-orange-#ffb416">
                    Giới thiệu
                  </a>
                </li>
                <li className="">
                  <a
                    href="#"
                    className=" text-sm font-medium text-white hover:text-orange-#ffb416">
                    Sản phẩm
                  </a>
                </li>
                <li className="">
                  <a
                    href="#"
                    className=" text-sm  font-medium text-white hover:text-orange-#ffb416">
                    Tin tức
                  </a>
                </li>
                <li className="">
                  <a
                    href="#"
                    className=" text-sm font-medium text-white hover:text-orange-#ffb416">
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-3 col-start-5 self-center justify-self-center">
              <>
                <Image
                  src="https://bizweb.dktcdn.net/100/431/449/themes/834425/assets/logo.png?1642042407923"
                  alt="logo"
                  width={200}
                  height={80}
                  layout="intrinsic"
                />
              </>
            </div>
            <div className="col-span-5 col-start-auto self-center">
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-3 col-start-2">
                  <div className="relative grid h-12">
                    <input
                      className="w-full rounded-full pl-[5%] text-sm text-[#333] outline-none"
                      placeholder="Bạn cân tìm gì?"></input>
                    <button className="absolute right-0 grid h-12 w-12 place-items-center rounded-[50%] bg-orange-#ffb416 text-white ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="col-span-1 col-start-auto self-center">
                  <ul className="grid grid-cols-3 gap-14">
                    <li className="grid grid-cols-2 gap-7 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7"
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
                      <span>1</span>
                    </li>
                    <li className="text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7"
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
                    </li>
                    <li className="text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
