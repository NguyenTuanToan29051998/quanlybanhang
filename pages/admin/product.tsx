import React, {FC, useEffect, useRef, useState} from 'react'
import {formatCurrency} from '../../helper/formatCurrency'
import adminOnly from '../../hocs/adminOnly'
import everyone from '../../hocs/everyone'
import {Product} from '../../models/product'
import {useAppDispatch, useAppSelector} from '../../redux/hook'
import {
  addProduct,
  getListProduct,
  testApi,
} from '../../redux/slices/productsSlice'

const FormPT: FC = () => {
  const dispatch = useAppDispatch()
  const [text, setText] = useState('')
  const inputRef = useRef<HTMLInputElement>()
  const [createStringURLImage, setStringURLImage] = useState('')
  const [fileImg, setFileImg] = useState<File[]>([])
  const products = useAppSelector((state) => state.products.products)

  const submitForm = (e) => {
    e.preventDefault()
    const formData = new FormData()
    for (const file of fileImg) {
      formData.append('files', file)
    }
    formData.append('name', e.target.name.value)
    formData.append('img', createStringURLImage)
    formData.append('barcode', e.target.barcode.value)
    formData.append('description', e.target.description.value)
    formData.append('warehouseQuantity', e.target.warehouseQuantity.value)
    formData.append('totalQuantity', e.target.totalQuantity.value)
    formData.append('storeQuantity', e.target.storeQuantity.value)
    formData.append('entryPrice', e.target.entryPrice.value)
    formData.append('exitPrice', e.target.exitPrice.value)
    formData.append('idStore', e.target.idStore.value)
    formData.append('display', e.target.display.value)

    dispatch(addProduct(formData))
  }

  const uploadImage = (event) => {
    if (event.target.files && event.target.files[0]) {
      setFileImg([...fileImg, event.target.files[0]])
      const initImg = URL.createObjectURL(event.target.files[0])
      if (createStringURLImage !== '') {
        setStringURLImage(createStringURLImage.concat(',', initImg))
      } else {
        setStringURLImage(initImg)
      }
    }
  }

  useEffect(() => {
    // dispatch(getListProduct())
  }, [])
  return (
    <>
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
                            Mã sản phẩm
                          </th>
                          <th className="whitespace-nowrap border-b border-solid border-gray-200 px-2 py-3 text-left align-middle text-sm font-light text-purple-500">
                            Mã vạch
                          </th>
                          <th className="whitespace-nowrap border-b border-solid border-gray-200 px-2 py-3 text-left align-middle text-sm font-light text-purple-500">
                            Tên sản phẩm
                          </th>
                          <th className="whitespace-nowrap border-b border-solid border-gray-200 px-2 py-3 text-left align-middle text-sm font-light text-purple-500">
                            Nhóm sản phẩm
                          </th>
                          <th className="whitespace-nowrap border-b border-solid border-gray-200 px-2 py-3 text-left align-middle text-sm font-light text-purple-500">
                            Giá nhập
                          </th>
                          <th className="whitespace-nowrap border-b border-solid border-gray-200 px-2 py-3 text-left align-middle text-sm font-light text-purple-500">
                            Giá bán
                          </th>
                          <th className="whitespace-nowrap border-b border-solid border-gray-200 px-2 py-3 text-left align-middle text-sm font-light text-purple-500">
                            Hành động
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {products.map((product) => {
                          return (
                            <>
                              <tr>
                                <th className="whitespace-nowrap border-b border-gray-200 px-2 py-4 text-left align-middle text-sm font-light">
                                  {product.id}
                                </th>
                                <th className="whitespace-nowrap border-b border-gray-200 px-2 py-4 text-left align-middle text-sm font-light">
                                  {product.barcode}
                                </th>
                                <th className="whitespace-nowrap border-b border-gray-200 px-2 py-4 text-left align-middle text-sm font-light">
                                  {product.name}
                                </th>
                                <th className="whitespace-nowrap border-b border-gray-200 px-2 py-4 text-left align-middle text-sm font-light">
                                  {/* {product.groupName} */}
                                </th>
                                <th className="whitespace-nowrap border-b border-gray-200 px-2 py-4 text-left align-middle text-sm font-light">
                                  {product.entryPrice}
                                </th>
                                <th className="whitespace-nowrap border-b border-gray-200 px-2 py-4 text-left align-middle text-sm font-light">
                                  {product.exitPrice}
                                </th>
                                <th className="relative whitespace-nowrap border-b border-gray-200 px-2 py-4 text-left align-middle text-sm font-light">
                                  <a
                                    className="absolute top-1/3 cursor-pointer"
                                    title="Chỉnh sửa">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className=" h-5 w-5"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth="2">
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                      />
                                    </svg>
                                  </a>
                                  <a
                                    className="absolute right-1/2 top-1/3 cursor-pointer"
                                    title="Xóa">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className=" h-5 w-5"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth="2">
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                      />
                                    </svg>
                                  </a>
                                </th>
                              </tr>
                            </>
                          )
                        })}
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
                      onChange={(e) => setText(formatCurrency(e.target.value))}
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
                      htmlFor="display"
                      className="col-span-3 self-center whitespace-nowrap text-sm font-semibold text-gray-700">
                      Ảnh trưng bày
                    </label>
                    <input
                      type="text"
                      name="display"
                      id="first-name"
                      autoComplete="given-name"
                      className="col-span-5 block w-full border-b-1 border-gray-300 bg-white py-2 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
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
                            ref={inputRef}
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
                  </div>
                  <div className="col-span-2 flex">
                    {createStringURLImage != '' ? (
                      createStringURLImage.split(',').map((item) => {
                        console.log(item, 'item')
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
                  <div className="col-span-2 inline-block text-right">
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      Save
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-20 grid grid-cols-3 gap-6">
                <form className="col-span-2 grid  grid-cols-2 gap-y-5 gap-x-10 rounded-xl bg-white p-4 shadow-md md:col-span-1">
                  <div className="shadow-lg-purple col-span-2 -mt-10 mb-3 grid h-16 w-full items-center justify-start rounded-xl bg-gradient-to-tr from-purple-500 to-purple-700 py-4 px-8 text-white">
                    Thêm Cửa hàng
                  </div>
                  <div className="col-span-2 grid grid-cols-8 gap-5 self-center">
                    <label
                      htmlFor="first-name"
                      className="col-span-3 self-center whitespace-nowrap text-sm font-semibold text-gray-700">
                      Tên cửa hàng
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
                      htmlFor="first-name"
                      className="col-span-3 self-center whitespace-nowrap text-sm font-semibold text-gray-700">
                      Địa chỉ
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
                      Trạng thái
                    </label>
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="col-span-5 mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                      <option>Đang hoạt động</option>
                      <option>Ngừng hoạt động</option>
                    </select>
                  </div>
                  <div className="col-span-2 grid grid-cols-8 gap-5 self-center">
                    <label
                      htmlFor="first-name"
                      className="col-span-3 self-center whitespace-nowrap text-sm font-semibold text-gray-700">
                      Ghi chú
                    </label>
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="col-span-5 block w-full border-b-1 border-gray-300 bg-white py-2 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="col-span-2 inline-block text-right">
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default adminOnly(FormPT)
