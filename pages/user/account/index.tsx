import React, {FC, useEffect, useRef, useState} from 'react'
import everyone from '../../../hocs/everyone'
import {useAppDispatch, useAppSelector} from '../../../redux/hook'

const AdminAcountPage: FC = () => {
  return (
    <>
      <div className="mx-auto max-w-screen-xl border">
        <div className="grid grid-cols-5">
          <div className="col-span-1">
            <ul className="flex min-w-full list-none flex-col">
              <li className="rounded-lg">
                <a
                  className=" flex items-center gap-4 rounded-lg px-4 py-3 text-sm font-light text-gray-700 text-green-3ba66b"
                  aria-current="page">
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
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  Tài khoản
                </a>
              </li>
              <li className="rounded-lg">
                <a className="flex items-center gap-4 rounded-lg px-4 py-3 text-sm font-light text-gray-700">
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
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Quản lý đơn hàng
                </a>
              </li>
              <li className="rounded-lg ">
                <a className="flex items-center gap-4 rounded-lg px-4 py-3 text-sm font-light text-gray-700">
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
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Sổ địa chỉ
                </a>
              </li>
              <li className="rounded-lg px-4 text-gray-700">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 py-3 text-sm font-light">
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
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                  Đăng xuât
                </a>
              </li>
            </ul>
          </div>
          {/* <div className="col-span-4 p-4">
            <h4 className="mb-5 text-lg font-normal uppercase">
              Thông tin tài khoản
            </h4>
            <div className="mb-5 grid grid-cols-5">
              <label
                htmlFor="first-name"
                className="col-span-1 self-center whitespace-nowrap text-sm  text-gray-700">
                Họ tên<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="col-span-3 block w-full rounded border border-gray-300 bg-white py-2 px-3  focus:outline-none sm:text-sm"></input>
            </div>
            <div className="mb-5 grid grid-cols-5">
              <label
                htmlFor="first-name"
                className="col-span-1 self-center whitespace-nowrap text-sm  text-gray-700">
                Số điện thoại
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="col-span-3 block w-full rounded border border-gray-300 bg-white py-2 px-3  focus:outline-none sm:text-sm"></input>
            </div>
            <div className="mb-5 grid grid-cols-5">
              <label
                htmlFor="first-name"
                className="col-span-1 self-center whitespace-nowrap text-sm  text-gray-700">
                Email
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="col-span-3 block w-full rounded border border-gray-300 bg-white py-2 px-3  focus:outline-none sm:text-sm"></input>
            </div>
            <div className="mb-5 grid grid-cols-5 gap-10">
              <label
                htmlFor="first-name"
                className="col-span-1 self-center whitespace-nowrap text-sm  text-gray-700">
                Giới tính
              </label>
              <div className="col-span-3 flex gap-20">
                <div className="flex items-center">
                  <input
                    id="push-everythin"
                    name="push-notification"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="push-everythin"
                    className="ml-3 block text-sm font-medium text-gray-700">
                    Anh
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="push-emai"
                    name="push-notification"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="push-emai"
                    className="ml-3 block text-sm font-medium text-gray-700">
                    Chị
                  </label>
                </div>
              </div>
            </div>
            <div className="mb-5 grid grid-cols-5">
              <label
                htmlFor="first-name"
                className="col-span-1 self-center whitespace-nowrap text-sm  text-gray-700">
                Ngày sinh
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="col-span-3 block w-full rounded border border-gray-300 bg-white py-2 px-3  focus:outline-none sm:text-sm"></input>
            </div>
            <div className="mb-5 grid grid-cols-5">
              <label
                htmlFor="first-name"
                className="col-span-1 self-center whitespace-nowrap text-sm  text-gray-700">
                Quốc gia
              </label>
              <select
                id="country"
                name="country"
                autoComplete="country-name"
                className="col-span-3 mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>
            <div className="mb-5 grid grid-cols-5">
              <label
                htmlFor="first-name"
                className="col-span-1 self-center whitespace-nowrap text-sm  text-gray-700">
                Tỉnh/Thành phố
              </label>
              <select
                id="country"
                name="country"
                autoComplete="country-name"
                className="col-span-3 mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>
            <div className="mb-5 grid grid-cols-5">
              <label
                htmlFor="first-name"
                className="col-span-1 self-center whitespace-nowrap text-sm  text-gray-700">
                Quận/Huyện
              </label>
              <select
                id="country"
                name="country"
                autoComplete="country-name"
                className="col-span-3 mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>
            <div className="mb-5 grid grid-cols-5">
              <label
                htmlFor="first-name"
                className="col-span-1 self-center whitespace-nowrap text-sm  text-gray-700">
                Phường xã
              </label>
              <select
                id="country"
                name="country"
                autoComplete="country-name"
                className="col-span-3 mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>
            <div className="mb-5 grid grid-cols-5">
              <label
                htmlFor="first-name"
                className="col-span-1 self-center whitespace-nowrap text-sm  text-gray-700">
                Số nhà
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                placeholder="Số nhà"
                className="col-span-3 block w-full rounded border border-gray-300 bg-white py-2 px-3  focus:outline-none sm:text-sm"></input>
            </div>
          </div> */}
          <div className="col-span-4 p-4">
            <table className="w-full border-collapse items-center bg-transparent">
              <thead>
                <tr className="border-b">
                  <th className="whitespace-nowrap border-b border-solid border-gray-200 px-2 py-3 text-left align-middle text-sm font-semibold">
                    Mã đơn hàng
                  </th>
                  <th className="whitespace-nowrap border-b border-solid border-gray-200 px-2 py-3 text-left align-middle text-sm font-semibold">
                    Sản phẩm
                  </th>
                  <th className="whitespace-nowrap border-b border-solid border-gray-200 px-2 py-3 text-left align-middle text-sm font-semibold">
                    Giá
                  </th>
                  <th className="whitespace-nowrap border-b border-solid border-gray-200 px-2 py-3 text-left align-middle text-sm font-semibold">
                    Ngày đặt mua
                  </th>
                  <th className="whitespace-nowrap border-b border-solid border-gray-200 px-2 py-3 text-left align-middle text-sm font-semibold">
                    Trạng thái
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <th className="whitespace-nowrap border-gray-200 px-2 py-4 text-left align-middle text-sm font-light">
                    #52094703
                  </th>
                  <th className="flex whitespace-nowrap border-gray-200 px-1 text-left align-middle text-sm font-light">
                    <img
                      src="https://aiphoenix-ins.s3.amazonaws.com/image_product/4ab97647-0518-483a-a48a-0b756e8878eb.webp"
                      alt=""
                      className="w-16"
                    />
                    <span className="self-center">
                      Bình đun siêu tốc Delites ST18S05 1.8L
                    </span>
                  </th>
                  <th className="whitespace-nowrap border-gray-200 px-2 py-4 text-left align-middle text-sm font-light">
                    197.000₫
                  </th>
                  <th className="whitespace-nowrap border-gray-200 px-2 py-4 text-left align-middle text-sm font-light">
                    11/12/2021
                  </th>
                  <th className="whitespace-nowrap  border-gray-200 px-2 py-4 text-left align-middle text-sm font-light">
                    Đã nhận hàng
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default everyone(AdminAcountPage)
