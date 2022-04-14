import React, {FC} from 'react'
import everyone from '../../hocs/everyone'
import {useAppDispatch, useAppSelector} from '../../redux/hook'

const Checkout: FC = () => {
  const cartItems = useAppSelector((state) => state.cart.cartItems)
  const {cartTotalQuantity, cartTotalAmount} = cartItems.reduce(
    (cartTotal, cartItem) => {
      cartTotal.cartTotalQuantity += cartItem.quantity
      cartTotal.cartTotalAmount += cartItem.price * cartItem.quantity
      return cartTotal
    },
    {
      cartTotalQuantity: 0,
      cartTotalAmount: 0,
    },
  )
  return (
    <div className="mx-auto max-w-screen-lg">
      <div className="grid grid-cols-2 ">
        <div className="col-span-1 p-5 py-[20%]">
          <div>
            <h2 className="mb-3">Thông tin khách hàng</h2>
            <div>
              <div className="mb-2 flex gap-6">
                <div>
                  <input className="mr-1" type="radio" />
                  <label htmlFor="">Anh</label>
                </div>
                <div>
                  <input className="mr-1" type="radio" />
                  <label htmlFor="">Chị</label>
                </div>
              </div>
              <div className="flex gap-3">
                <input
                  className="mb-3 h-11 w-full rounded border pl-[3%] text-sm text-[#333] outline-none"
                  placeholder="Họ và tên"
                />
                <input
                  className="mb-3 h-11 w-full rounded border pl-[3%] text-sm text-[#333] outline-none"
                  placeholder="Số điện thoại"
                />
              </div>
            </div>
          </div>
          <div>
            <h2 className="mb-3">Chọn cách thức nhận hàng</h2>
            <div className="flex gap-6">
              <div className="">
                <input type="radio" className="mr-1" checked={true} />
                <label htmlFor="">Giao tận nơi</label>
              </div>
              <div className="">
                <input type="radio" className="mr-1" />
                <label htmlFor="">Nhận tại siêu thị</label>
              </div>
            </div>
            <div className="grid  grid-cols-2 gap-4 border p-5">
              <select className="rounded border bg-white p-2 text-[#333]">
                <option value="">---</option>
                <option value="1" data-select2-id="select2-data-15-x56c">
                  Hà Nội
                </option>
                <option value="2" data-select2-id="select2-data-16-jxm7">
                  TP Hồ Chí Minh
                </option>
                <option value="3" data-select2-id="select2-data-17-kn5g">
                  An Giang
                </option>
                <option value="4" data-select2-id="select2-data-5-1kjh">
                  Bà Rịa-Vũng Tàu
                </option>
                <option value="5" data-select2-id="select2-data-18-bb9j">
                  Bắc Giang
                </option>
                <option value="6" data-select2-id="select2-data-19-nwzb">
                  Bắc Kạn
                </option>
                <option value="7" data-select2-id="select2-data-20-4054">
                  Bạc Liêu
                </option>
                <option value="8" data-select2-id="select2-data-21-u0o2">
                  Bắc Ninh
                </option>
                <option value="9" data-select2-id="select2-data-22-10w2">
                  Bến Tre
                </option>
                <option value="10" data-select2-id="select2-data-23-dbpe">
                  Bình Dương
                </option>
                <option value="11" data-select2-id="select2-data-24-5r3m">
                  Bình Định
                </option>
                <option value="12" data-select2-id="select2-data-25-obmu">
                  Bình Phước
                </option>
                <option value="13" data-select2-id="select2-data-26-muvz">
                  Bình Thuận
                </option>
                <option value="14" data-select2-id="select2-data-27-r4r9">
                  Cà Mau
                </option>
                <option value="15" data-select2-id="select2-data-28-u9o7">
                  Cao Bằng
                </option>
                <option value="16" data-select2-id="select2-data-29-nqiw">
                  Cần Thơ
                </option>
                <option value="17" data-select2-id="select2-data-30-ov8p">
                  Đà Nẵng
                </option>
                <option value="18" data-select2-id="select2-data-31-glhi">
                  Đắk Lắk
                </option>
                <option value="19" data-select2-id="select2-data-32-l0sg">
                  Đắk Nông
                </option>
              </select>
              <select className="rounded border bg-white p-2 text-[#333]">
                <option value="">---</option>
                <option value="1" data-select2-id="select2-data-15-x56c">
                  Hà Nội
                </option>
                <option value="2" data-select2-id="select2-data-16-jxm7">
                  TP Hồ Chí Minh
                </option>
                <option value="3" data-select2-id="select2-data-17-kn5g">
                  An Giang
                </option>
                <option value="4" data-select2-id="select2-data-5-1kjh">
                  Bà Rịa-Vũng Tàu
                </option>
                <option value="5" data-select2-id="select2-data-18-bb9j">
                  Bắc Giang
                </option>
                <option value="6" data-select2-id="select2-data-19-nwzb">
                  Bắc Kạn
                </option>
                <option value="7" data-select2-id="select2-data-20-4054">
                  Bạc Liêu
                </option>
                <option value="8" data-select2-id="select2-data-21-u0o2">
                  Bắc Ninh
                </option>
                <option value="9" data-select2-id="select2-data-22-10w2">
                  Bến Tre
                </option>
                <option value="10" data-select2-id="select2-data-23-dbpe">
                  Bình Dương
                </option>
                <option value="11" data-select2-id="select2-data-24-5r3m">
                  Bình Định
                </option>
                <option value="12" data-select2-id="select2-data-25-obmu">
                  Bình Phước
                </option>
                <option value="13" data-select2-id="select2-data-26-muvz">
                  Bình Thuận
                </option>
                <option value="14" data-select2-id="select2-data-27-r4r9">
                  Cà Mau
                </option>
                <option value="15" data-select2-id="select2-data-28-u9o7">
                  Cao Bằng
                </option>
                <option value="16" data-select2-id="select2-data-29-nqiw">
                  Cần Thơ
                </option>
                <option value="17" data-select2-id="select2-data-30-ov8p">
                  Đà Nẵng
                </option>
                <option value="18" data-select2-id="select2-data-31-glhi">
                  Đắk Lắk
                </option>
                <option value="19" data-select2-id="select2-data-32-l0sg">
                  Đắk Nông
                </option>
                <option value="20" data-select2-id="select2-data-33-75n5">
                  Điện Biên
                </option>
                <option value="21" data-select2-id="select2-data-34-p1yo">
                  Đồng Nai
                </option>
                <option value="22" data-select2-id="select2-data-35-20dn">
                  Đồng Tháp
                </option>
              </select>
              <select className="rounded border bg-white p-2 text-[#333]">
                <option value="">---</option>
                <option value="1" data-select2-id="select2-data-15-x56c">
                  Hà Nội
                </option>
                <option value="2" data-select2-id="select2-data-16-jxm7">
                  TP Hồ Chí Minh
                </option>
                <option value="3" data-select2-id="select2-data-17-kn5g">
                  An Giang
                </option>
                <option value="4" data-select2-id="select2-data-5-1kjh">
                  Bà Rịa-Vũng Tàu
                </option>
                <option value="5" data-select2-id="select2-data-18-bb9j">
                  Bắc Giang
                </option>
                <option value="6" data-select2-id="select2-data-19-nwzb">
                  Bắc Kạn
                </option>
                <option value="7" data-select2-id="select2-data-20-4054">
                  Bạc Liêu
                </option>
                <option value="8" data-select2-id="select2-data-21-u0o2">
                  Bắc Ninh
                </option>
                <option value="9" data-select2-id="select2-data-22-10w2">
                  Bến Tre
                </option>
                <option value="10" data-select2-id="select2-data-23-dbpe">
                  Bình Dương
                </option>
                <option value="11" data-select2-id="select2-data-24-5r3m">
                  Bình Định
                </option>
                <option value="12" data-select2-id="select2-data-25-obmu">
                  Bình Phước
                </option>
                <option value="13" data-select2-id="select2-data-26-muvz">
                  Bình Thuận
                </option>
                <option value="14" data-select2-id="select2-data-27-r4r9">
                  Cà Mau
                </option>
                <option value="15" data-select2-id="select2-data-28-u9o7">
                  Cao Bằng
                </option>
                <option value="16" data-select2-id="select2-data-29-nqiw">
                  Cần Thơ
                </option>
              </select>
              <input
                className="border outline-none"
                placeholder="Số nhà, tên đường"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 border p-5">
              <select className="rounded border bg-white p-2 text-[#333]">
                <option value="">---</option>
                <option value="1" data-select2-id="select2-data-15-x56c">
                  Hà Nội
                </option>
                <option value="2" data-select2-id="select2-data-16-jxm7">
                  TP Hồ Chí Minh
                </option>
                <option value="3" data-select2-id="select2-data-17-kn5g">
                  An Giang
                </option>
                <option value="4" data-select2-id="select2-data-5-1kjh">
                  Bà Rịa-Vũng Tàu
                </option>
                <option value="5" data-select2-id="select2-data-18-bb9j">
                  Bắc Giang
                </option>
                <option value="6" data-select2-id="select2-data-19-nwzb">
                  Bắc Kạn
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-span-1 border-l-[1px]">
          <div className="h-screen">
            <h2 className="py-5 pl-10 ">
              Đơn hàng ({cartTotalQuantity} sản phẩm)
            </h2>
            <hr />
            <div className="h-[380px] pl-10">
              <div className="grid h-full grid-cols-3 overflow-y-scroll py-4 ">
                {cartItems.map((item) => {
                  return (
                    <>
                      <div className="col-span-2 col-start-1 pb-3">
                        <div className="grid grid-cols-4">
                          <a
                            className="relative col-span-1 col-start-1 flex "
                            href="#"
                            title={item.name}>
                            <img
                              className="w-[70%] justify-self-center rounded-lg border p-1 "
                              src={item.img}
                              alt="Thịt bò"
                            />
                            <div className="absolute -top-[15%] right-[15%] h-6 min-w-[24px] rounded-full border bg-slate-800 text-center text-white">
                              <div className="px-1 text-sm">
                                {item.quantity}
                              </div>
                            </div>
                          </a>
                          <a
                            className="col-span-3 col-start-2 self-center text-sm"
                            href="/thit-bo"
                            title={item.name}>
                            {item.name}
                          </a>
                        </div>
                      </div>
                      <div className="relative col-span-1 col-start-3">
                        <div className="absolute right-0 bottom-1/2 text-sm">
                          {item.price.toLocaleString('it-IT', {
                            style: 'currency',
                            currency: 'VND',
                          })}
                        </div>
                      </div>
                    </>
                  )
                })}
              </div>
              <hr />
              <div className="grid grid-cols-4 gap-3 py-5">
                <div className="col-span-3 rounded-md border">
                  <input
                    className="rounded-xl p-3 outline-none"
                    type="text"
                    placeholder="Nhập mã giảm giá"
                  />
                </div>
                <button className="rounded-md border bg-[#737373] text-white">
                  Áp dụng
                </button>
              </div>
              <hr className="" />
              <div className="py-5">
                <div className="relative mb-2 flex">
                  <div>Tạm tính</div>
                  <div className="absolute right-0">25.000đ</div>
                </div>
                <div className="relative flex">
                  <div>Phí vận chuyển</div>
                  <div className="absolute right-0">40.000đ</div>
                </div>
              </div>

              <hr className="" />
              <div className="py-5">
                <div className="relative flex ">
                  <div>Tổng cộng</div>
                  <div className="absolute right-0">
                    {cartTotalAmount.toLocaleString('it-IT', {
                      style: 'currency',
                      currency: 'VND',
                    })}
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-3 py-5">
                  <div className="col-span-3 flex self-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 pr-1"
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
                    Quay lại giỏ hàng
                  </div>
                  <button className="rounded-md border bg-[#737373] py-3 text-white">
                    Đặt hàng
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default everyone(Checkout)
