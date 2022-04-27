import {NextPage} from 'next'
import type {AppProps} from 'next/app'
import Image from 'next/image'
import {FC, ReactNode, useEffect, useState} from 'react'
import {NextPageContext} from 'next'
import {useRouter} from 'next/router'
import {DropdownItemComponent} from '../components/DropdownItemComponent'
import {DropdownMenuComponent} from '../components/DropdownMenuComponent'
import {useAppDispatch, useAppSelector} from '../redux/hook'
import {
  addQuantity,
  initCart,
  removeItemFromCart,
  substractQuantity,
} from '../redux/slices/cartSlice'

interface GuestWrapperProps {
  pageProps?: object
}

function everyone(Content: NextPage): ReactNode {
  const EveryoneWrapper: NextPage<GuestWrapperProps> = ({
    pageProps,
  }: GuestWrapperProps) => {
    const menuDropdown = [
      'Trái cây',
      'Thịt tươi',
      'Hải sản tươi',
      'Rau củ',
      'Thực phẩm khô',
      'Đồ uống',
      'Bơ sữa',
      'Thực phẩm tết',
      'Hạt giống',
      'Đồ ăn đóng hộp',
      'Sản phẩm bán chạy',
    ]

    const router = useRouter()
    const dispatch = useAppDispatch()
    const cart = useAppSelector((state) => state.cart)
    const [cartSlidebar, setCartSlidebar] = useState('opacity-0')
    const {cartTotalQuantity, cartTotalAmount} = cart.cartItems.reduce(
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
    useEffect(() => {
      dispatch(initCart())
    }, [])

    return (
      <>
        <div>
          <div className="relative z-50 bg-green-3ba66b">
            <div className="container mx-auto ">
              <div className="grid h-[120px] grid-cols-12">
                <div className="col-span-4 col-start-1 self-center">
                  <ul className="flex space-x-10 ">
                    <li className=" ">
                      <a
                        onClick={() => router.push('/')}
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

                    <DropdownMenuComponent data="Sản phẩm">
                      {menuDropdown.map((value) => {
                        return (
                          <>
                            <DropdownItemComponent bgColor={'bg-green-3ba66b'}>
                              <a className="py-1" href="#" title={value}>
                                {value}
                              </a>
                            </DropdownItemComponent>
                          </>
                        )
                      })}
                    </DropdownMenuComponent>
                    <li className="bg-r">
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
                <div className="col-span-4 col-start-5 self-center justify-self-center">
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
                <div className="col-span-4 col-start-auto self-center">
                  <div className="grid grid-cols-6 gap-4">
                    <div className="col-span-3 col-start-1">
                      <div className="relative grid h-12">
                        <input
                          className="w-full rounded-full pl-[5%] text-sm text-[#333] outline-none "
                          placeholder="Bạn cân tìm gì?"></input>
                        <button className="absolute right-0 grid h-12 w-12 place-items-center rounded-[50%] bg-orange-#ffb416 text-white ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7 "
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
                    <div className="col-span-2 col-start-auto self-center">
                      <ul className="grid grid-cols-3">
                        <li
                          className="relative cursor-pointer text-white"
                          onClick={() => router.push('/user/favorite_product')}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 stroke-1"
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

                          <span className="absolute top-0 left-2/4 h-5 w-5 rounded-full bg-orange-#ffb416 text-center text-sm text-white ">
                            1
                          </span>
                        </li>
                        <li
                          className="relative cursor-pointer text-white"
                          onClick={() => setCartSlidebar('opacity-100')}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 stroke-1"
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
                          <span className="absolute top-0 left-2/4 h-5 w-5 rounded-full bg-orange-#ffb416 text-center text-sm text-white">
                            {cartTotalQuantity}
                          </span>
                        </li>
                        <li
                          className="cursor-pointer text-white"
                          onClick={() => router.push('/user/login')}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 stroke-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
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
          <div className="h-[47px] w-full bg-after-header bg-center"></div>
        </div>
        <Content {...pageProps} />
        <div className="mt-12">
          <div className="h-[47px] w-full bg-before-footer bg-center"></div>
          <div className=" bg-green-3ba66b pt-12">
            <div className="container mx-auto">
              <div className="grid grid-cols-3">
                <div className="col-span-3 mt-[70px] px-[50px] text-center lg:col-span-1">
                  <h4 className="mb-25px text-lg font-medium uppercase text-white">
                    <span>Đăng ký nhận thông tin</span>
                  </h4>
                  <p className="mb-4 text-sm leading-6 text-white">
                    Đăng ký nhận bản tin để nhận ưu đãi đặc biệt về sản phẩm ND
                    Fresh
                  </p>
                  <div className="relative grid">
                    <form>
                      <input
                        className="w-full rounded-25px pr-[110px] pl-[5%] text-sm leading-10 text-[#333] outline-none"
                        type="email"
                        placeholder="Nhập email của bạn"
                      />
                      <span className=" absolute right-0">
                        <button
                          className="h-10 w-max rounded-r-25px bg-orange-#ffb416 px-4 text-white"
                          type="submit"
                          aria-label="Đăng ký"
                          name="subscribe">
                          Đăng ký
                        </button>
                      </span>
                    </form>
                  </div>
                </div>
                <div className="col-span-3 mt-[70px] lg:col-span-1">
                  <div className="grid justify-items-center ">
                    <img
                      src="//bizweb.dktcdn.net/100/431/449/themes/834425/assets/logo_footer.png?1642042407923"
                      alt="ND Fresh"
                      // width={250}
                      // height={200}
                    />
                  </div>
                  <div className="mt-4 px-[50px] text-center text-sm leading-6 text-white">
                    Website thương mại điện tử ND Fresh do ND Group là đơn vị
                    chủ quản, chịu trách nhiệm và thực hiện các giao dịch liên
                    quan mua sắm sản phẩm hàng hoá tiêu dùng thiết yếu.
                  </div>
                  <div className="grid justify-items-center">
                    <img
                      className="relative -bottom-1/4 "
                      src="//bizweb.dktcdn.net/100/431/449/themes/834425/assets/img-footer.png?1642042407923"
                      data-src="//bizweb.dktcdn.net/100/431/449/themes/834425/assets/img-footer.png?1642042407923"
                      alt="ND Fresh"
                      data-was-processed="true"
                      // width={250}
                      // height={200}
                    />
                  </div>
                </div>
                <div className="col-span-3 mt-[70px] px-[50px] text-center lg:col-span-1">
                  <h4 className="mb-25px text-lg font-medium uppercase text-white">
                    <span>
                      Liên hệ với chúng tôi{' '}
                      <i className="fa fa-plus hidden" aria-hidden="true"></i>
                    </span>
                  </h4>
                  <ul>
                    <li className="text-sm leading-6 text-white">
                      <strong className="font-medium">Địa chỉ:</strong> 266 Đội
                      Cấn, Ba Đình, Hà Nội
                    </li>
                    <li className="text-sm leading-6 text-white">
                      <strong className="font-medium">Điện thoại:</strong>{' '}
                      <a className="fone" href="tel:19006750">
                        19006750
                      </a>
                    </li>
                    <li className="text-sm leading-6 text-white">
                      <strong className="font-medium">Email:</strong>{' '}
                      <a href="mailto:support@sapo.vn">support@sapo.vn</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#198754] py-[18px]">
            <div className="container mx-auto">
              <div className="grid grid-cols-3">
                <div className="col-span-1 col-start-1">
                  <div className="text-center text-sm text-white">
                    @ Bản quyền thuộc về{' '}
                    <a href="https://nd-fresh-1.mysapo.net/">ND Fresh</a>
                    <span className="d-lg-inline-block d-none"> | </span>
                    <span className="opacity1">
                      Cung cấp bởi{' '}
                      <a href="javascript:;" rel="noopener">
                        Sapo
                      </a>
                    </span>
                  </div>
                </div>

                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        {cartSlidebar !== 'opacity-0' ? (
          <div
            className={`fixed left-0 top-0 bottom-0 right-0 z-[999] w-full bg-[#363636] opacity-50`}
            onClick={() => setCartSlidebar('opacity-0')}></div>
        ) : (
          ''
        )}
        {/* sidebar cart */}
        <div
          className={`fixed top-0 flex h-full w-[360px] flex-col bg-white ${
            cartSlidebar !== 'opacity-0'
              ? 'right-0 z-[999] opacity-100 duration-700'
              : '-right-1/4 z-[999] opacity-0 duration-700'
          } `}>
          <div className="relative h-[6%] px-4 py-4">
            <h4 className="font-bold uppercase">Giỏ hàng</h4>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-0 top-0 h-6 w-6 stroke-1 text-base font-semibold"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className="h-[80%] overflow-y-scroll">
            {cart.cartItems.map((item) => {
              return (
                <>
                  <div className="grid snap-start grid-cols-3 gap-3 p-4">
                    <div className="">
                      <a className="grid" href="#" title={item.name}>
                        <img
                          className="w-[85%] justify-self-center"
                          src={item.img}
                          alt="Thịt bò"
                        />
                      </a>
                    </div>
                    <div>
                      <div className="text-[13px] font-semibold">
                        <a href="/thit-bo" title={item.name}>
                          {item.name}
                        </a>
                      </div>
                      <div>
                        <label className="text-xs">Số lượng</label>
                        <div>
                          <div className="grid select-none grid-cols-3 pt-2">
                            <div
                              className="grid w-full place-items-center border hover:cursor-pointer"
                              onClick={() => dispatch(substractQuantity(item))}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M18 12H6"
                                />
                              </svg>
                            </div>
                            <input
                              className="w-full border py-1 text-center text-sm"
                              value={item.quantity}
                            />
                            <div
                              className="grid w-full place-items-center border hover:cursor-pointer"
                              onClick={() => dispatch(addQuantity(item))}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="absolute bottom-0 ">
                        <div>
                          <span className="text-sm font-semibold text-red-#eb3e32">
                            {Number(item.price).toLocaleString('it-IT', {
                              style: 'currency',
                              currency: 'VND',
                            })}
                          </span>
                        </div>
                        <a
                          className="text-[13px] text-green-3ba66b hover:cursor-pointer hover:underline"
                          data-id="48274541"
                          title="Bỏ sản phẩm"
                          onClick={() => dispatch(removeItemFromCart(item))}>
                          Bỏ sản phẩm
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              )
            })}
          </div>

          <div className="absolute bottom-0 mb-3 h-[14%] w-full bg-white p-[10px]">
            <hr />
            <div className="pt-5">
              <div className="flex">
                <div className="w-[50%]">Tổng tiền:</div>
                <div className="">
                  <span className="font-semibold text-red-#eb3e32">
                    {cartTotalAmount.toLocaleString('it-IT', {
                      style: 'currency',
                      currency: 'VND',
                    })}
                  </span>
                </div>
              </div>
            </div>
            <div
              className="mt-6 rounded-[4px] bg-green-3ba66b text-center text-white hover:cursor-pointer hover:bg-[#2e8053]"
              onClick={() => router.push('/user/checkout')}>
              <button
                type="button"
                className="p-[10px] "
                id="btn-proceed-checkout"
                title="Thanh toán">
                Thanh toán
              </button>
            </div>
          </div>
        </div>

        {/* notification */}
        {/* <div>
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
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div> */}
        {/* thanh toán */}
      </>
    )
  }
  EveryoneWrapper.getInitialProps = async (
    ctx: NextPageContext,
  ): Promise<object> => {
    return {
      pageProps: Content.getInitialProps
        ? await Content.getInitialProps(ctx)
        : {},
    }
  }

  return EveryoneWrapper
}

export default everyone
