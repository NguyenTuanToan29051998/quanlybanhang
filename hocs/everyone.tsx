import {NextPage} from 'next'
import type {AppProps} from 'next/app'
import Image from 'next/image'
import {FC, ReactNode} from 'react'
import {NextPageContext} from 'next'

interface GuestWrapperProps {
  pageProps?: object
}

function everyone(Content: NextPage): ReactNode {
  const EveryoneWrapper: NextPage<GuestWrapperProps> = ({
    pageProps,
  }: GuestWrapperProps) => {
    return (
      <>
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
                        className="w-full rounded-full pl-[5%] text-sm outline-none"
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
                    <ul className="grid grid-cols-3 gap-4">
                      <li className="relative text-white">
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
                        <span className="absolute top-0 left-3/4 h-5 w-5 rounded-full bg-orange-#ffb416 text-center text-sm text-white ">
                          1
                        </span>
                      </li>
                      <li className="relative text-white">
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
                        <span className="absolute top-0 left-3/4 h-5 w-5 rounded-full bg-orange-#ffb416 text-center text-sm text-white ">
                          2
                        </span>
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
        <Content {...pageProps} />
        <div className="bg-green-3ba66b">
          <div className="container mx-auto">
            <div className="grid grid-cols-3">
              <div className="col-span-1 col-start-1 self-center text-center">
                <h4 className="text-2xl text-white">
                  <span>Đăng ký nhận thông tin</span>
                </h4>
                <p className="text-sm text-white">
                  Đăng ký nhận bản tin để nhận ưu đãi đặc biệt về sản phẩm ND
                  Fresh
                </p>
                <div className="">
                  <form>
                    <input
                      type="email"
                      value=""
                      placeholder="Nhập email của bạn"
                    />
                    <span className="">
                      <button
                        className=""
                        type="submit"
                        aria-label="Đăng ký"
                        name="subscribe">
                        Đăng ký
                      </button>
                    </span>
                  </form>
                </div>
              </div>
              <div className="col-span-1 col-start-2">
                <div className="">
                  <a href="/">
                    <Image
                      src="https://bizweb.dktcdn.net/100/431/449/themes/834425/assets/logo_footer.png?1642042407923"
                      alt="ND Fresh"
                      width={250}
                      height={200}
                    />
                  </a>
                </div>
                <div className="text_introduction">
                  Website thương mại điện tử ND Fresh do ND Group là đơn vị chủ
                  quản, chịu trách nhiệm và thực hiện các giao dịch liên quan
                  mua sắm sản phẩm hàng hoá tiêu dùng thiết yếu.
                </div>
                <div className="img-footer d-lg-block d-none">
                  <Image
                    className=""
                    src="https://bizweb.dktcdn.net/100/431/449/themes/834425/assets/img-footer.png?1642042407923"
                    data-src="//bizweb.dktcdn.net/100/431/449/themes/834425/assets/img-footer.png?1642042407923"
                    alt="ND Fresh"
                    data-was-processed="true"
                    width={250}
                    height={200}
                  />
                </div>
              </div>
              <div className="col-span-1 col-start-3">
                <h4 className="title-menu">
                  <span>
                    Liên hệ với chúng tôi{' '}
                    <i className="fa fa-plus hidden" aria-hidden="true"></i>
                  </span>
                </h4>
                <ul>
                  <li>
                    <strong>Địa chỉ:</strong> 266 Đội Cấn, Ba Đình, Hà Nội
                  </li>
                  <li>
                    <strong>Điện thoại:</strong>{' '}
                    <a className="fone" href="tel:19006750">
                      19006750
                    </a>
                  </li>
                  <li>
                    <strong>Email:</strong>{' '}
                    <a href="mailto:support@sapo.vn">support@sapo.vn</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
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
