import React, {FC, useEffect, useRef, useState} from 'react'
import adminOnly from '../../hocs/adminOnly'
import {useAppDispatch, useAppSelector} from '../../redux/hook'
import {
  addtStore,
  getListStore,
  getStoreById,
  updateStoreById,
} from '../../redux/slices/storesSlice'

const Store: FC = () => {
  const dispatch = useAppDispatch()
  const {stores} = useAppSelector((state) => state.stores)
  const [store, setStore] = useState({
    id: 0,
    name: '',
    address: '',
    status: '',
    whoMaster: '',
    note: '',
  })
  const [showForm, setShowForm] = useState('hidden')
  const [isAddNew, setIsAddNew] = useState(false)
  const handleSubmitStore = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (isAddNew) {
      const paramsStore = {
        name: e.currentTarget.name_store.value,
        address: e.currentTarget.address.value,
        status: e.currentTarget.status.value,
        // whoMaster: e.currentTarget.whoMaster.value,
        note: e.currentTarget.note.value,
      }
      dispatch(addtStore(paramsStore))
    } else {
      const paramsStore = {
        id: store.id,
        name: e.currentTarget.name_store.value,
        address: e.currentTarget.address.value,
        status: e.currentTarget.status.value,
        // whoMaster: e.currentTarget.whoMaster.value,
        note: e.currentTarget.note.value,
      }
      dispatch(updateStoreById(paramsStore))
    }
  }

  const handleAddStore = () => {
    setIsAddNew(true)
    setShowForm('')
  }

  const handleUpdateStore = (idStore) => {
    setIsAddNew(false)
    setShowForm('')
    getStoreById(idStore)
      .then((data) =>
        setStore({
          ...store,
          id: data.id,
          name: data.name,
          address: data.address,
          status: data.status,
          // whoMaster: data.whoMaster,
          note: data.note,
        }),
      )
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    dispatch(getListStore())
  }, [])
  return (
    <>
      <div className="mt-40 md:ml-64">
        <div className="-mt-24 h-auto px-3 md:px-8">
          <div className="container relative mx-auto max-w-full">
            <div className="mb-5 grid grid-cols-1 px-4">
              <div className="overflow-hdden w-full rounded-xl bg-white p-4 shadow-md">
                <div className="shadow-lg-purple -mt-10 mb-4 grid h-24 w-full items-center justify-start rounded-xl bg-gradient-to-tr from-purple-500 to-purple-700 py-4 px-8 text-white">
                  <h2 className="text-2xl text-white">Danh sách cửa hàng</h2>
                </div>
                <div className="p-4">
                  <button
                    className="mr-2 mb-2 rounded-lg border bg-blue-700 p-2 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={handleAddStore}>
                    Thêm cửa hàng
                  </button>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse items-center bg-transparent">
                      <thead>
                        <tr>
                          <th className="whitespace-nowrap border-b border-solid border-gray-200 px-2 py-3 text-left align-middle text-sm font-light text-purple-500">
                            Mã cửa hàng
                          </th>
                          <th className="whitespace-nowrap border-b border-solid border-gray-200 px-2 py-3 text-left align-middle text-sm font-light text-purple-500">
                            Tên cửa hàng
                          </th>
                          <th className="whitespace-nowrap border-b border-solid border-gray-200 px-2 py-3 text-left align-middle text-sm font-light text-purple-500">
                            Địa chỉ
                          </th>
                          <th className="whitespace-nowrap border-b border-solid border-gray-200 px-2 py-3 text-left align-middle text-sm font-light text-purple-500">
                            Trạng thái
                          </th>
                          <th className="whitespace-nowrap border-b border-solid border-gray-200 px-2 py-3 text-left align-middle text-sm font-light text-purple-500">
                            Chủ cửa hàng
                          </th>
                          <th className="whitespace-nowrap border-b border-solid border-gray-200 px-2 py-3 text-left align-middle text-sm font-light text-purple-500">
                            Ghi chú
                          </th>
                          <th className="whitespace-nowrap border-b border-solid border-gray-200 px-2 py-3 text-left align-middle text-sm font-light text-purple-500">
                            Hành động
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {(stores ? stores : []).map((store) => {
                          return (
                            <>
                              <tr>
                                <th className="whitespace-nowrap border-b border-gray-200 px-2 py-4 text-left align-middle text-sm font-light">
                                  {store.id}
                                </th>
                                <th className="whitespace-nowrap border-b border-gray-200 px-2 py-4 text-left align-middle text-sm font-light">
                                  {store.name}
                                </th>
                                <th className="whitespace-nowrap border-b border-gray-200 px-2 py-4 text-left align-middle text-sm font-light">
                                  {store.address}
                                </th>
                                <th className="whitespace-nowrap border-b border-gray-200 px-2 py-4 text-left align-middle text-sm font-light">
                                  {store.status}
                                </th>
                                <th className="whitespace-nowrap border-b border-gray-200 px-2 py-4 text-left align-middle text-sm font-light">
                                  {store.status}
                                </th>
                                <th className="whitespace-nowrap border-b border-gray-200 px-2 py-4 text-left align-middle text-sm font-light">
                                  {store.note}
                                </th>
                                <th className="relative whitespace-nowrap border-b border-gray-200 px-2 py-4 text-left align-middle text-sm font-light">
                                  <a
                                    className="absolute top-1/3 cursor-pointer"
                                    title="Chỉnh sửa"
                                    onClick={() => handleUpdateStore(store.id)}>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-5 w-5"
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
            <div className="fixed top-[10%] left-[40%] mt-20 w-full overflow-hidden px-4">
              <div className="mt-20 grid grid-cols-3 gap-6">
                <form
                  className={`col-span-2 grid grid-cols-2 gap-y-5 gap-x-10 rounded-xl border bg-white p-4 shadow-md md:col-span-1 ${showForm}`}
                  onSubmit={handleSubmitStore}>
                  <div className="relative col-span-2 mb-7">
                    <div className="absolute text-2xl font-semibold text-gray-700">
                      {isAddNew ? 'Thêm cửa hàng' : 'Chỉnh sửa'}
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute right-0 h-6 w-6 cursor-pointer"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      onClick={() => setShowForm('hidden')}>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                  <div className="col-span-2 grid grid-cols-8 gap-5 self-center">
                    <label
                      htmlFor="first-name"
                      className="col-span-3 self-center whitespace-nowrap text-sm font-semibold text-gray-700">
                      Tên cửa hàng
                    </label>
                    <input
                      type="text"
                      name="name_store"
                      id="first-name"
                      autoComplete="given-name"
                      className="col-span-5 block w-full border-b-1 border-gray-300 bg-white py-2 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      defaultValue={isAddNew ? '' : store.name}
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
                      name="address"
                      id="first-name"
                      autoComplete="given-name"
                      className="col-span-5 block w-full border-b-1 border-gray-300 bg-white py-2 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      defaultValue={isAddNew ? '' : store.address}
                    />
                  </div>
                  <div className="col-span-2 grid grid-cols-8 gap-5 self-center">
                    <label
                      htmlFor="country"
                      className="col-span-3 block self-center whitespace-nowrap text-sm font-semibold text-gray-700">
                      Trạng thái
                    </label>
                    <select
                      id="status"
                      name="status"
                      autoComplete="country-name"
                      className="col-span-5 mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      // defaultValue={isAddNew ? '' : store.status}
                    >
                      <option>Ngừng hoạt động</option>
                      <option>Đang hoạt động</option>
                    </select>
                  </div>
                  <div className="col-span-2 grid grid-cols-8 gap-5 self-center">
                    <label
                      htmlFor="country"
                      className="col-span-3 block self-center whitespace-nowrap text-sm font-semibold text-gray-700">
                      Chủ chi nhánh
                    </label>
                    <select
                      id="country"
                      name="whoMaster"
                      autoComplete="country-name"
                      className="col-span-5 mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                      <option>Nguyễn Văn Tuấn</option>
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
                      name="note"
                      id="first-name"
                      autoComplete="given-name"
                      className="col-span-5 block w-full border-b-1 border-gray-300 bg-white py-2 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      defaultValue={isAddNew ? '' : store.note}
                    />
                  </div>
                  <div className="col-span-2 inline-block text-right">
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={() => setShowForm('hidden')}>
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

export default adminOnly(Store)
