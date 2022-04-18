import React, {FC, useEffect, useRef, useState} from 'react'
import {formatCurrency} from '../../helper/formatCurrency'
import everyone from '../../hocs/everyone'
import {useAppDispatch, useAppSelector} from '../../redux/hook'
import {testApi} from '../../redux/slices/productsSlice'

const FormPT: FC = () => {
  const dispatch = useAppDispatch()
  const [text, setText] = useState('')
  const [product, setProduct] = useState({
    name: '',
    img: '',
    barcode: '',
    description: '',
    warehouseQuantity: 0,
    totalQuantity: 0,
    storeQuantity: 0,
    entryPrice: '',
    exitPrice: '',
    discount: '',
    idStore: 0,
  })
  const [createObjectURL, setCreateObjectURL] = useState('')
  const submitForm = (e) => {
    e.preventDefault()
    console.log(e.target.name.value, 'xxxxxxx')
    const product = {
      name: e.target.name.value,
      img: createObjectURL,
      barcode: e.target.barcode.value,
      description: e.target.description.value,
      warehouseQuantity: Number(e.target.warehouseQuantity.value),
      totalQuantity: Number(e.target.totalQuantity.value),
      storeQuantity: Number(e.target.storeQuantity.value),
      entryPrice: e.target.entryPrice.value,
      exitPrice: e.target.exitPrice.value,
      discount: e.target.discount.value,
      idStore: Number(e.target.idStore.value),
    }
    console.log(product, 'product')
    // setProduct({...product, name: e.target.name_product.value})
    dispatch(testApi(product))
  }

  const uploadImage = (event) => {
    if (event.target.files && event.target.files[0]) {
      const initImg = URL.createObjectURL(event.target.files[0])
      if (createObjectURL !== '') {
        setCreateObjectURL(createObjectURL.concat(',', initImg))
      } else {
        setCreateObjectURL(initImg)
      }
    }
  }

  // useEffect(() => {
  //   console.log(createObjectURL.split(','), 'xxx')
  // }, [createObjectURL])
  return (
    <>
      <div className="fixed top-0 -left-64 z-10 h-screen w-64 flex-row flex-nowrap overflow-hidden overflow-y-auto bg-white py-4 px-6 shadow-xl transition-all duration-300 md:left-0">
        <div className="relative min-h-full flex-col flex-nowrap items-stretch px-0">
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-block w-full text-center">
            <h1 className="mt-0 mb-2 font-serif text-2xl font-bold leading-normal text-gray-900">
              Material Tailwind
            </h1>
          </a>
          <div className="flex flex-col">
            <hr className="my-4 min-w-full" />
            <ul className="flex min-w-full list-none flex-col">
              <li className="mb-4 rounded-lg">
                <a
                  className=" flex items-center gap-4 rounded-lg  bg-gradient-to-r from-sky-500 to-indigo-500 px-4 py-3 text-sm font-light text-gray-700 shadow-md"
                  aria-current="page">
                  {/* <span className="material-icons undefined text-2xl leading-none">
                    dashboard
                  </span> */}
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
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  Dashboard
                </a>
              </li>
              <li className="mb-2 rounded-lg">
                <a
                  className="flex items-center gap-4 rounded-lg px-4 py-3 text-sm font-light text-gray-700"
                  href="#">
                  {/* <span className="material-icons undefined text-2xl leading-none">
                    settings
                  </span> */}
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
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Settings
                </a>
              </li>
              <li className="mb-2 rounded-lg ">
                <a
                  className="flex items-center gap-4 rounded-lg px-4 py-3 text-sm font-light text-gray-700"
                  href="/tables">
                  {/* <span className="material-icons undefined text-2xl leading-none">
                    toc
                  </span> */}
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
                      d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                  Tables
                </a>
              </li>
              <li className="mb-2 rounded-lg text-gray-700">
                <a
                  className="flex items-center gap-4 rounded-lg px-4 py-3 text-sm font-light text-gray-700"
                  href="/maps">
                  {/* <span className="material-icons undefined text-2xl leading-none">
                    map
                  </span> */}
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
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                  Maps
                </a>
              </li>
              <li className="mb-2 rounded-lg px-4 text-gray-700">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 py-3 text-sm font-light">
                  {/* <span className="material-icons undefined text-2xl leading-none">
                    fingerprint
                  </span> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" h-full bg-[#eeeeee]">
        <nav className="bg-blue-400 py-6 px-3 md:ml-64">
          <div className="container mx-auto flex max-w-full items-center justify-between md:pr-8 md:pl-10">
            <div className="flex w-full items-center justify-between">
              <h4 className="mt-1 text-sm uppercase tracking-wider text-white">
                SETTINGS
              </h4>
              <div className="flex">
                <div className="relative flex items-center rounded-lg bg-white bg-opacity-20 py-1 px-3 sm:w-full lg:w-60">
                  <span className="mr-2 text-xl text-white">
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
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </span>
                  <input
                    placeholder="Search"
                    className="w-full border-none bg-transparent py-2 text-sm font-normal leading-snug text-white placeholder-white placeholder-opacity-50 focus:outline-none focus:ring-0"
                  />
                </div>
                <div className="-mr-4 ml-6">
                  <div className="w-12">
                    <img
                      src="#"
                      className="undefined h-auto max-w-full rounded-full border-none align-middle"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="mt-40 md:ml-64">
          <div className="-mt-24 h-auto px-3 md:px-8">
            <div className="container mx-auto max-w-full">
              <div className="mb-5 grid grid-cols-1 px-4">
                <div className="overflow-hdden undefined w-full rounded-xl bg-white p-4 shadow-md">
                  <div className="shadow-lg-purple undefined -mt-10 mb-4 grid h-24 w-full items-center justify-start rounded-xl bg-gradient-to-tr from-purple-500 to-purple-700 py-4 px-8 text-white">
                    <h2 className="text-2xl text-white">Danh sách sản phẩm</h2>
                  </div>
                  <div className="undefined p-4">
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse items-center bg-transparent">
                        <thead>
                          <tr>
                            <th className="whitespace-nowrap border-b border-solid border-gray-200 px-2 py-3 text-left align-middle text-sm font-light text-purple-500">
                              Project
                            </th>
                            <th className="whitespace-nowrap border-b border-solid border-gray-200 px-2 py-3 text-left align-middle text-sm font-light text-purple-500">
                              Budget
                            </th>
                            <th className="whitespace-nowrap border-b border-solid border-gray-200 px-2 py-3 text-left align-middle text-sm font-light text-purple-500">
                              Status
                            </th>
                            <th className="whitespace-nowrap border-b border-solid border-gray-200 px-2 py-3 text-left align-middle text-sm font-light text-purple-500">
                              Users
                            </th>
                            <th className="whitespace-nowrap border-b border-solid border-gray-200 px-2 py-3 text-left align-middle text-sm font-light text-purple-500">
                              Completion
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th className="whitespace-nowrap border-b border-gray-200 px-2 py-4 text-left align-middle text-sm font-light">
                              Argon Design System
                            </th>
                            <th className="whitespace-nowrap border-b border-gray-200 px-2 py-4 text-left align-middle text-sm font-light">
                              $2,500 USD
                            </th>
                            <th className="whitespace-nowrap border-b border-gray-200 px-2 py-4 text-left align-middle text-sm font-light">
                              $2,500 USD
                            </th>
                            <th className="whitespace-nowrap border-b border-gray-200 px-2 py-4 text-left align-middle text-sm font-light">
                              $2,500 USD
                            </th>
                            <th className="whitespace-nowrap border-b border-gray-200 px-2 py-4 text-left align-middle text-sm font-light">
                              <div className="flex h-2 overflow-hidden rounded bg-green-200">
                                <div className="flex w-full items-center justify-center rounded bg-green-500 text-xs font-medium text-white"></div>
                              </div>
                            </th>
                          </tr>
                          <tr>
                            <th className="whitespace-nowrap border-b border-gray-200 px-2 py-4 text-left align-middle text-sm font-light">
                              Argon Design System
                            </th>
                            <th className="whitespace-nowrap border-b border-gray-200 px-2 py-4 text-left align-middle text-sm font-light">
                              $2,500 USD
                            </th>
                            <th className="whitespace-nowrap border-b border-gray-200 px-2 py-4 text-left align-middle text-sm font-light">
                              $2,500 USD
                            </th>
                            <th className="whitespace-nowrap border-b border-gray-200 px-2 py-4 text-left align-middle text-sm font-light">
                              $2,500 USD
                            </th>
                            <th className="whitespace-nowrap border-b border-gray-200 px-2 py-4 text-left align-middle text-sm font-light">
                              <div className="flex h-2 overflow-hidden rounded bg-green-200">
                                <div className="flex w-full items-center justify-center rounded bg-green-500 text-xs font-medium text-white"></div>
                              </div>
                            </th>
                          </tr>
                          <tr>
                            <th className="whitespace-nowrap border-b border-gray-200 px-2 py-4 text-left align-middle text-sm font-light">
                              Argon Design System
                            </th>
                            <th className="whitespace-nowrap border-b border-gray-200 px-2 py-4 text-left align-middle text-sm font-light">
                              $2,500 USD
                            </th>
                            <th className="whitespace-nowrap border-b border-gray-200 px-2 py-4 text-left align-middle text-sm font-light">
                              $2,500 USD
                            </th>
                            <th className="whitespace-nowrap border-b border-gray-200 px-2 py-4 text-left align-middle text-sm font-light">
                              $2,500 USD
                            </th>
                            <th className="whitespace-nowrap border-b border-gray-200 px-2 py-4 text-left align-middle text-sm font-light">
                              <div className="flex h-2 overflow-hidden rounded bg-green-200">
                                <div className="flex w-full items-center justify-center rounded bg-green-500 text-xs font-medium text-white"></div>
                              </div>
                            </th>
                          </tr>
                          <tr>
                            <th className="whitespace-nowrap border-b border-gray-200 px-2 py-4 text-left align-middle text-sm font-light">
                              Argon Design System
                            </th>
                            <th className="whitespace-nowrap border-b border-gray-200 px-2 py-4 text-left align-middle text-sm font-light">
                              $2,500 USD
                            </th>
                            <th className="whitespace-nowrap border-b border-gray-200 px-2 py-4 text-left align-middle text-sm font-light">
                              $2,500 USD
                            </th>
                            <th className="whitespace-nowrap border-b border-gray-200 px-2 py-4 text-left align-middle text-sm font-light">
                              $2,500 USD
                            </th>
                            <th className="whitespace-nowrap border-b border-gray-200 px-2 py-4 text-left align-middle text-sm font-light">
                              <div className="flex h-2 overflow-hidden rounded bg-green-200">
                                <div className="flex w-full items-center justify-center rounded bg-green-500 text-xs font-medium text-white"></div>
                              </div>
                            </th>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                    <div className="flex flex-1 justify-between sm:hidden">
                      <a
                        href="#"
                        className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                        Previous
                      </a>
                      <a
                        href="#"
                        className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                        Next
                      </a>
                    </div>
                    <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                      <div>
                        <p className="text-sm text-gray-700">
                          Showing <span className="font-medium">1</span> to{' '}
                          <span className="font-medium">10</span> of{' '}
                          <span className="font-medium">97</span> results
                        </p>
                      </div>
                      <div>
                        <nav
                          className="relative z-0 inline-flex -space-x-px rounded-md shadow-sm"
                          aria-label="Pagination">
                          <a
                            href="#"
                            className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50">
                            <span className="sr-only">Previous</span>
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
                          </a>
                          {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
                          <a
                            href="#"
                            aria-current="page"
                            className="relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600">
                            1
                          </a>
                          <a
                            href="#"
                            className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50">
                            2
                          </a>
                          <a
                            href="#"
                            className="relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 md:inline-flex">
                            3
                          </a>
                          <span className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700">
                            ...
                          </span>
                          <a
                            href="#"
                            className="relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 md:inline-flex">
                            8
                          </a>
                          <a
                            href="#"
                            className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50">
                            9
                          </a>
                          <a
                            href="#"
                            className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50">
                            10
                          </a>
                          <a
                            href="#"
                            className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50">
                            <span className="sr-only">Next</span>
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
                          </a>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="overflow-hdden undefined mt-20 w-full px-4">
                <div className="mt-20 grid grid-cols-3 gap-6">
                  <form
                    className="col-span-2 grid grid-cols-2 gap-y-5 gap-x-10 rounded-xl bg-white p-4 shadow-md"
                    onSubmit={submitForm}>
                    <div className="shadow-lg-purple col-span-2 -mt-10 mb-3 grid h-16 w-full items-center justify-start rounded-xl bg-gradient-to-tr from-purple-500 to-purple-700 py-4 px-8 text-white">
                      Thêm sản phẩm
                    </div>
                    <div className="col-span-2 grid grid-cols-8 gap-5 self-center xl:col-span-1">
                      <label
                        htmlFor="name"
                        className="col-span-3 self-center whitespace-nowrap text-sm font-semibold text-gray-700">
                        Tên sản phẩm
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="col-span-5 block w-full border-b-1 border-gray-300 bg-white py-2 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-2 grid grid-cols-8 gap-5 self-center xl:col-span-1">
                      <label
                        htmlFor="nameGroup"
                        className="col-span-3 self-center whitespace-nowrap text-sm font-semibold text-gray-700">
                        Tên nhóm sản phẩm
                      </label>
                      <select
                        id="country"
                        name="nameGroup"
                        autoComplete="country-name"
                        className="col-span-5 mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                    </div>
                    <div className="col-span-2 grid grid-cols-8 gap-5 self-center xl:col-span-1">
                      <label
                        htmlFor="barcode"
                        className="col-span-3 self-center whitespace-nowrap text-sm font-semibold text-gray-700">
                        Mã vạch
                      </label>
                      <input
                        type="text"
                        name="name_product"
                        id="barcode"
                        autoComplete="given-name"
                        className="col-span-5 block w-full border-b-1 border-gray-300 bg-white py-2 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-2 grid grid-cols-8 gap-5 self-center xl:col-span-1">
                      <label
                        htmlFor="warehouseQuantity"
                        className="col-span-3 self-center whitespace-nowrap text-sm font-semibold text-gray-700">
                        Số lượng trong kho
                      </label>
                      <input
                        type="text"
                        name="warehouseQuantity"
                        autoComplete="given-name"
                        className="col-span-5 block w-full border-b-1 border-gray-300 bg-white py-2 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-2 grid grid-cols-8 gap-5 self-center xl:col-span-1">
                      <label
                        htmlFor="storeQuantity"
                        className="col-span-3 self-center whitespace-nowrap text-sm font-semibold text-gray-700">
                        Số lượng trong cửa hàng
                      </label>
                      <input
                        type="text"
                        name="storeQuantity"
                        autoComplete="given-name"
                        className="col-span-5 block w-full border-b-1 border-gray-300 bg-white py-2 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-2 grid grid-cols-8 gap-5 self-center xl:col-span-1">
                      <label
                        htmlFor="totalQuantity"
                        className="col-span-3 self-center whitespace-nowrap text-sm font-semibold text-gray-700">
                        Tổng số lượng
                      </label>
                      <input
                        type="text"
                        name="totalQuantity"
                        id="first-name"
                        autoComplete="given-name"
                        className="col-span-5 block w-full border-b-1 border-gray-300 bg-white py-2 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-2 grid grid-cols-8 gap-5 self-center xl:col-span-1">
                      <label
                        htmlFor="entryPrice"
                        className="col-span-3 self-center whitespace-nowrap text-sm font-semibold text-gray-700">
                        Giá nhập
                      </label>
                      <input
                        type="text"
                        name="entryPrice"
                        id="first-name"
                        autoComplete="given-name"
                        className="col-span-5 block w-full border-b-1 border-gray-300 bg-white py-2 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        value={text}
                        onChange={(e) =>
                          setText(formatCurrency(e.target.value))
                        }
                      />
                    </div>
                    <div className="col-span-2 grid grid-cols-8 gap-5 self-center xl:col-span-1">
                      <label
                        htmlFor="exitPrice"
                        className="col-span-3 self-center whitespace-nowrap text-sm font-semibold text-gray-700">
                        Giá bán
                      </label>
                      <input
                        type="text"
                        name="exitPrice"
                        id="first-name"
                        autoComplete="given-name"
                        className="col-span-5 block w-full border-b-1 border-gray-300 bg-white py-2 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-2 grid grid-cols-8 gap-5 self-center xl:col-span-1">
                      <label
                        htmlFor="idStore"
                        className="col-span-3 self-center whitespace-nowrap text-sm font-semibold text-gray-700">
                        Tên cửa hàng
                      </label>
                      <input
                        type="text"
                        name="idStore"
                        id="first-name"
                        autoComplete="given-name"
                        className="col-span-5 block w-full border-b-1 border-gray-300 bg-white py-2 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-2 grid grid-cols-8 gap-5 self-center xl:col-span-1">
                      <label
                        htmlFor="discount"
                        className="col-span-3 self-center whitespace-nowrap text-sm font-semibold text-gray-700">
                        Giảm giá
                      </label>
                      <input
                        type="text"
                        name="discount"
                        id="first-name"
                        autoComplete="given-name"
                        className="col-span-5 block w-full border-b-1 border-gray-300 bg-white py-2 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-2 grid grid-cols-8 gap-5 self-center xl:col-span-1">
                      <label
                        htmlFor="first-name"
                        className="col-span-3 self-center whitespace-nowrap text-sm font-semibold text-gray-700">
                        Ảnh
                      </label>
                      <div className="col-span-5 grid justify-items-center">
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file_upload"
                            className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                            <span>Upload a file</span>
                            <input
                              id="file_upload"
                              name="file_upload"
                              type="file"
                              className="sr-only"
                              onChange={uploadImage}
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>

                      {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 stroke-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg> */}
                    </div>
                    <div className="col-span-2 grid grid-cols-8 gap-5 self-center xl:col-span-1">
                      <label
                        htmlFor="description"
                        className="col-span-3 self-center whitespace-nowrap text-sm font-semibold text-gray-700">
                        Mô tả
                      </label>
                      <input
                        type="text"
                        name="description"
                        id="first-name"
                        autoComplete="given-name"
                        className="col-span-5 block w-full border-b-1 border-gray-300 bg-white py-2 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-2 flex">
                      {createObjectURL != '' ? (
                        createObjectURL.split(',').map((item) => {
                          return (
                            <>
                              <div className="mr-3 h-20 w-20 border-1 border-dashed">
                                <img
                                  src={item}
                                  alt=""
                                  id=" img"
                                  className="h-20"
                                />
                              </div>
                            </>
                          )
                        })
                      ) : (
                        <div className="mr-3 border-1 border-dashed">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-16 w-16 stroke-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                      )}
                    </div>
                    <div className="col-span-2 inline-block px-4 text-right">
                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        Save
                      </button>
                    </div>
                  </form>
                  <div className="col-span-2 grid  grid-cols-2 gap-y-5 gap-x-10 rounded-xl bg-white p-4 shadow-md md:col-span-1">
                    <div className="shadow-lg-purple col-span-2 -mt-10 mb-3 grid h-16 w-full items-center justify-start rounded-xl bg-gradient-to-tr from-purple-500 to-purple-700 py-4 px-8 text-white">
                      Thêm nhóm sản phẩm
                    </div>
                    <div className="col-span-2 grid grid-cols-8 gap-5 self-center">
                      <label
                        htmlFor="first-name"
                        className="col-span-3 self-center whitespace-nowrap text-sm font-semibold text-gray-700">
                        Tên nhóm sản phẩm
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="col-span-5 block w-full border-b-1 border-gray-300 bg-white py-2 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-2 grid grid-cols-8 gap-5 self-center">
                      <label
                        htmlFor="country"
                        className="col-span-3 block self-center whitespace-nowrap text-sm font-semibold text-gray-700">
                        Nhóm cha
                      </label>
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="col-span-5 mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="mt-20 grid grid-cols-3 gap-6">
                  <div className="col-span-2 grid  grid-cols-2 gap-y-5 gap-x-10 rounded-xl bg-white p-4 shadow-md md:col-span-1">
                    <div className="shadow-lg-purple col-span-2 -mt-10 mb-3 grid h-16 w-full items-center justify-start rounded-xl bg-gradient-to-tr from-purple-500 to-purple-700 py-4 px-8 text-white">
                      Thêm nhóm sản phẩm
                    </div>
                    <div className="col-span-2 grid grid-cols-8 gap-5 self-center">
                      <label
                        htmlFor="first-name"
                        className="col-span-3 self-center whitespace-nowrap text-sm font-semibold text-gray-700">
                        Tên nhóm sản phẩm
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="col-span-5 block w-full border-b-1 border-gray-300 bg-white py-2 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-2 grid grid-cols-8 gap-5 self-center">
                      <label
                        htmlFor="country"
                        className="col-span-3 block self-center whitespace-nowrap text-sm font-semibold text-gray-700">
                        Nhóm cha
                      </label>
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="col-span-5 mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                    </div>
                    {/* <div className="col-span-2 inline-block text-right">
                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        Save
                      </button>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <footer className="flex flex-col items-center justify-between border-t border-gray-200 py-6 px-16 font-light md:ml-64 lg:flex-row">
        <p className="mb-6 text-gray-700 lg:mb-0">
          Copyright © 2022{' '}
          <a
            href="https://www.creative-tim.com?ref=mtdk"
            target="_blank"
            rel="noreferrer"
            className="text-light-blue-500 hover:text-light-blue-700">
            Creative Tim
          </a>
        </p>
        <ul className="list-unstyled flex">
          <li className="mr-6">
            <a
              className="block text-sm font-medium text-gray-700 hover:text-gray-900"
              target="_blank"
              rel="noreferrer"
              href="https://www.creative-tim.com/presentation?ref=mtdk">
              About Us
            </a>
          </li>
          <li className="mr-6">
            <a
              className="block text-sm font-medium text-gray-700 hover:text-gray-900"
              target="_blank"
              rel="noreferrer"
              href="https://www.creative-tim.com/blog/?ref=mtdk">
              Blog
            </a>
          </li>
          <li className="mr-6">
            <a
              className="block text-sm font-medium text-gray-700 hover:text-gray-900"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/creativetimofficial/material-tailwind-dashboard-react/blob/main/LICENSE?ref=mtdk">
              MIT License
            </a>
          </li>
          <li>
            <a
              className="block text-sm font-medium text-gray-700 hover:text-gray-900"
              target="_blank"
              rel="noreferrer"
              href="https://creative-tim.com/contact-us?ref=mtdk">
              Contact Us
            </a>
          </li>
        </ul>
      </footer> */}
    </>
  )
}

export default FormPT
