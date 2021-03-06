import React, {FC, useEffect, useState} from 'react'
import everyone from '../../hocs/everyone'
import {useAppDispatch, useAppSelector} from '../../redux/hook'
import {ProductComponent} from '../../components/ProductComponent'

const DetailProduct: FC = () => {
  const products = useAppSelector((state) => state.products.products)
  const [tabProductPolicy, setTabProductPolicy] = useState([true, false, false])
  const [index, setIndex] = useState(0)
  const [index1, setIndex1] = useState(1)
  const [transL, setTransL] = useState(false)
  const [transR, setTransR] = useState(false)

  const imagesForProduct = [
    '//bizweb.dktcdn.net/thumb/large/100/431/449/products/sp6.jpg?v=1625548895950',
    '//bizweb.dktcdn.net/thumb/large/100/431/449/products/sp6-2.jpg?v=1625548896893',
    '//bizweb.dktcdn.net/thumb/large/100/431/449/products/chanh1.jpg?v=1628523062820',
  ]

  const handlePrev = () => {
    setTransL(false)
    setTransR(true)
    const nextIndex = index - 1
    const nextIndex1 = index1 - 1
    if (nextIndex < 0) {
      setIndex(imagesForProduct.length - 1)
    } else {
      setIndex(nextIndex)
    }
    if (nextIndex1 < 0) {
      setIndex1(imagesForProduct.length - 1)
    } else {
      setIndex1(nextIndex1)
    }
  }

  const handleNext = () => {
    setTransL(true)
    setTransR(false)
  }

  useEffect(() => {
    if (transR) {
      setTimeout(() => {
        setTransR(false)
      }, 500)
    }

    if (transL) {
      setTimeout(() => {
        setTransL(false)
        setIndex((index + 1) % imagesForProduct.length)
        setIndex1((index1 + 1) % imagesForProduct.length)
      }, 500)
    }
  }, [imagesForProduct.length, index, index1, transL, transR])

  return (
    <div className="mx-auto max-w-screen-xl">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-5 col-start-1">
          <div className="flex">
            <div className="">
              <div className="">
                <img
                  height="80"
                  width="80"
                  src="//bizweb.dktcdn.net/thumb/medium/100/431/449/products/sp6.jpg?v=1625548895950"
                  alt="Chanh t????i v??? xanh"
                  data-image="//bizweb.dktcdn.net/thumb/medium/100/431/449/products/sp6.jpg?v=1625548895950"
                  className="swiper-lazy"
                />
              </div>
              <div className="">
                <img
                  height="80"
                  width="80"
                  src="//bizweb.dktcdn.net/thumb/medium/100/431/449/products/sp6-2.jpg?v=1625548896893"
                  alt="Chanh t????i v??? xanh"
                  data-image="//bizweb.dktcdn.net/thumb/medium/100/431/449/products/sp6-2.jpg?v=1625548896893"
                  className="swiper-lazy"
                />
              </div>
              <div className="swiper-slide swiper-slide-visible">
                <img
                  height="80"
                  width="80"
                  src="//bizweb.dktcdn.net/thumb/medium/100/431/449/products/chanh1.jpg?v=1628523062820"
                  alt="Chanh t????i v??? xanh"
                  data-image="//bizweb.dktcdn.net/thumb/medium/100/431/449/products/chanh1.jpg?v=1628523062820"
                  className="swiper-lazy"
                />
              </div>
            </div>
            <div className="ml-2 flex select-none items-center">
              <a className="relative flex max-w-[380px] items-center overflow-hidden">
                <div
                  className="absolute z-20 ml-1 grid h-10 w-8 cursor-pointer items-center justify-center rounded border bg-green-3ba66b hover:bg-orange-#ffb416 "
                  onClick={handlePrev}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 cursor-pointer text-white"
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
                <img
                  // height="400"
                  // width="90%"
                  src={imagesForProduct[index]}
                  alt="Chanh t????i v??? xanh"
                  className={`absolute z-10 ${
                    transL
                      ? '-translate-x-full transform transition duration-500 ease-linear'
                      : transR
                      ? 'animate-slideL'
                      : ''
                  }`}
                />
                <img
                  // width="90%"
                  src={imagesForProduct[index1]}
                  alt="Chanh t????i v??? xanh"
                  className={` ${
                    transL
                      ? 'animate-slideR'
                      : transR
                      ? 'translate-x-full transform transition duration-500 ease-linear'
                      : ''
                  }`}
                />
                <div
                  className="absolute right-0 z-20 mr-1 grid h-10 w-8 cursor-pointer items-center justify-center rounded border bg-green-3ba66b hover:bg-orange-#ffb416"
                  onClick={handleNext}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5  cursor-pointer text-white "
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
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-4 col-start-6">
          <div className="py-5">
            <h1 className="mb-2 text-xl font-semibold text-black">
              Chanh t????i v??? xanh
            </h1>
            <div className="mb-3">
              <div>
                <span className="text-2xl font-semibold text-[#eb3e32]">
                  30.000???
                </span>
                <del className="text-sm text-[#b4b4b4]">38.000???</del>
              </div>
              <span className="text-sm">
                Ti???t ki???m:
                <span className="font-semibold">
                  8.000??? <span>so v???i gi?? th??? tr?????ng</span>
                </span>
              </span>
            </div>
            <div className="mb-3 text-sm">
              <p>
                Chanh l?? m???t s??? lo??i th???c v???t cho qu??? nh???, thu???c chi Cam chanh
                (Citrus), khi ch??n c?? m??u xanh ho???c v??ng, th???t qu??? c?? v??? chua.
              </p>
            </div>
            <div className="">
              <div className="pb-3">
                <div className="mb-1 font-semibold">Tr???ng l?????ng </div>
                <div className="flex w-12 justify-center rounded border border-green-3ba66b text-green-3ba66b">
                  1 kg
                </div>
              </div>
              <label className="font-semibold">S??? l?????ng:</label>
              <div className="flex pt-1">
                <div className="mr-3 w-[120px]">
                  <div className="grid select-none grid-cols-3 rounded-[20px] border">
                    <div className="grid h-10 w-full place-items-center hover:cursor-pointer">
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
                      className="w-full py-1 text-center text-sm"
                      value={1}
                    />
                    <div className="grid w-full place-items-center hover:cursor-pointer">
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
                <div className="mr-3 flex h-11 items-center rounded-[20px] bg-green-3ba66b px-3 text-base font-bold text-white hover:cursor-pointer hover:bg-[#ffb416]">
                  Th??m v??o gi??? h??ng
                </div>
                <div className="flex h-11 items-center rounded-[20px] border bg-[#eb3e32] px-3 font-bold text-white hover:cursor-pointer hover:bg-[#ffb416]">
                  Mua ngay
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 col-start-10 grid justify-items-center rounded-lg border p-3">
          <div className="mb-4">
            <div className="flex justify-center">
              <img
                src="//bizweb.dktcdn.net/100/431/449/themes/834425/assets/service_1.png?1642042407923"
                alt="100% t??? nhi??n"
                className="img-responsive"
              />
            </div>
            <div className="info">100% t??? nhi??n</div>
          </div>
          <div className="mb-4">
            <div className="flex justify-center">
              <img
                src="//bizweb.dktcdn.net/100/431/449/themes/834425/assets/service_2.png?1642042407923"
                alt="Ch???ng nh???n ATTP"
                className="img-responsive"
              />
            </div>
            <div className="info">Ch???ng nh???n ATTP</div>
          </div>
          <div className="mb-4">
            <div className="flex justify-center">
              <img
                src="//bizweb.dktcdn.net/100/431/449/themes/834425/assets/service_3.png?1642042407923"
                alt="Lu??n lu??n t????i m???i"
                className="img-responsive"
              />
            </div>
            <div className="info">Lu??n lu??n t????i m???i</div>
          </div>
          <div className="mb-4">
            <div className="flex justify-center">
              <img
                src="//bizweb.dktcdn.net/100/431/449/themes/834425/assets/service_4.png?1642042407923"
                alt="An to??n cho s???c kho???"
                className="img-responsive"
              />
            </div>
            <div className="info">An to??n cho s???c kho???</div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <ul className="mx-auto grid max-w-prose grid-cols-3 rounded-t-xl bg-green-3ba66b  text-white">
          <li
            className={`w-full rounded-tl-xl py-2 text-center hover:bg-orange-#ffb416 ${
              tabProductPolicy[0] ? 'bg-orange-#ffb416' : ''
            }`}
            onClick={() => setTabProductPolicy([true, false, false])}>
            <a
              className="text-sm font-semibold uppercase"
              title="Th??ng tin s???n ph???m">
              Th??ng tin s???n ph???m
            </a>
          </li>
          <li
            className={`w-full py-2 text-center hover:bg-orange-#ffb416 ${
              tabProductPolicy[1] ? 'bg-orange-#ffb416' : ''
            }`}
            onClick={() => setTabProductPolicy([false, true, false])}>
            <a
              className="text-sm font-semibold uppercase"
              title="Ch??nh s??ch ?????i tr???">
              Ch??nh s??ch ?????i tr???
            </a>
          </li>
          <li
            className={`w-full rounded-tr-xl py-2 text-center hover:bg-orange-#ffb416 ${
              tabProductPolicy[2] ? 'bg-orange-#ffb416' : ''
            }`}
            onClick={() => setTabProductPolicy([false, false, true])}>
            <a
              className="text-sm font-semibold uppercase"
              title=" H?????ng d???n b???o qu???n">
              H?????ng d???n b???o qu???n
            </a>
          </li>
        </ul>
        <div className="border p-3">
          <div className={`${tabProductPolicy[0] ? '' : 'hidden'}`}>
            <p className="text-[15px]">
              Chanh l?? m???t s??? lo??i th???c v???t cho qu??? nh???, thu???c chi Cam chanh
              (Citrus), khi ch??n c?? m??u xanh ho???c v??ng, th???t qu??? c?? v??? chua. Qu???
              chanh ???????c s??? d???ng l??m th???c ph???m tr??n kh???p th??? gi???i - ch??? y???u d??ng
              n?????c ??p c???a n??, th??? nh??ng ph???n c??m (c??c m??i c???a chanh) v?? v???
              (zest) c??ng ???????c s??? d???ng, ch??? y???u l?? trong n???u ??n v?? n?????ng b??nh.
              N?????c ??p chanh ch???a kho???ng 5% (kho???ng 0,3 mol / l??t) axit citric,
              ??i???u n??y gi??p chanh c?? v??? chua, v?? ????? pH c???a chanh t??? 2-3. ??i???u
              n??y l??m cho n?????c ??p chanh kh??ng ?????t, c?? th??? s??? d???ng thay ax??t cho
              c??c th?? nghi???m khoa h???c trong gi??o d???c. B???i v?? c?? v??? chua, nhi???u
              th???c u???ng v?? k???o c?? m??i v??? ???? xu???t hi???n, bao g???m c??? n?????c chanh.
            </p>
          </div>
          <div className={`${tabProductPolicy[1] ? '' : 'hidden'}`}>
            <p>
              <strong>ND Fresh</strong> l?? h??? th???ng c???a h??ng th???c ph???m s???ch uy
              t??n nh???t ??? Vi???t Nam, chuy??n cung c???p th???c ph???m s???ch t???i t???ng b???p
              ??n c???a gia ????nh b???n.
            </p>
            <p>
              <strong>T???m nh??n: </strong>???????c nu??i tr???ng, ch??? bi???n theo ph????ng
              Bio (sinh h???c), Organic (h???u c??), Eco (sinh th??i); cam k???t kh??ng
              b??n h??ng gi???, h??ng nh??i v?? h??ng k??m ch???t l?????ng. S???n ph???m ???????c giao
              ?????n tay kh??ch h??ng lu??n ????ng cam k???t, ????ng ch???t l?????ng ni???m y???t,
              lu??n ???????c b???o qu???n trong m??i tr?????ng l?? t?????ng, ?????m b???o v??? sinh an
              to??n th???c ph???m.
            </p>
            <p>
              <strong>M???c ti??u:</strong> S???n ph???m ???????c giao ?????n tay kh??ch h??ng
              lu??n ????ng cam k???t, ????ng ch???t l?????ng ni???m y???t, lu??n ???????c b???o qu???n
              trong m??i tr?????ng l?? t?????ng, ?????m b???o v??? sinh an to??n th???c ph???m.
            </p>
          </div>
          <div className={`${tabProductPolicy[2] ? '' : 'hidden'}`}>
            <p>
              <strong>ND Fresh</strong> l?? h??? th???ng c???a h??ng th???c ph???m s???ch uy
              t??n nh???t ??? Vi???t Nam, chuy??n cung c???p th???c ph???m s???ch t???i t???ng b???p
              ??n c???a gia ????nh b???n.
            </p>
            <p>
              <strong>T???m nh??n: </strong>???????c nu??i tr???ng, ch??? bi???n theo ph????ng
              Bio (sinh h???c), Organic (h???u c??), Eco (sinh th??i); cam k???t kh??ng
              b??n h??ng gi???, h??ng nh??i v?? h??ng k??m ch???t l?????ng. S???n ph???m ???????c giao
              ?????n tay kh??ch h??ng lu??n ????ng cam k???t, ????ng ch???t l?????ng ni???m y???t,
              lu??n ???????c b???o qu???n trong m??i tr?????ng l?? t?????ng, ?????m b???o v??? sinh an
              to??n th???c ph???m.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-16">
        <div className="mb-5 grid justify-items-center">
          <a
            className="text-4xl font-bold text-[#3e4a5e] hover:text-orange-#ffb416"
            href="/san-pham-noi-bat"
            title="S???n ph???m li??n quan">
            S???n ph???m li??n quan
          </a>
          <img
            className="py-3"
            src="https://bizweb.dktcdn.net/100/431/449/themes/834425/assets/bg-title-after.png?1640335531122"
            alt=""
          />
        </div>
        <div className="relative flex items-center">
          <div className="absolute -left-[4%] z-20 ml-1 grid h-10 w-8 cursor-pointer items-center justify-center rounded border bg-green-3ba66b ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 cursor-pointer text-white"
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
          <div className="grid grid-cols-5 gap-5">
            {products.slice(0, 5).map((item, index) => {
              return (
                <>
                  <div className="rounded-10px border">
                    <ProductComponent data={item} index={index + 1} />
                  </div>
                </>
              )
            })}
          </div>
          <div className="absolute -right-[4%] z-20 mr-1 grid h-10 w-8 cursor-pointer  items-center justify-center rounded border bg-green-3ba66b">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 cursor-pointer text-white "
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
      <div className="mt-16">
        <div className="mb-5 grid justify-items-center">
          <a
            className="text-4xl font-bold text-[#3e4a5e] hover:text-orange-#ffb416"
            href="/san-pham-noi-bat"
            title="S???n ph???m li??n quan">
            S???n ph???m ???? xem
          </a>
          <img
            className="py-3"
            src="https://bizweb.dktcdn.net/100/431/449/themes/834425/assets/bg-title-after.png?1640335531122"
            alt=""
          />
        </div>
        <div className="relative flex items-center">
          <div className="absolute -left-[4%] z-20 ml-1 grid h-10 w-8 cursor-pointer items-center justify-center rounded border bg-green-3ba66b ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 cursor-pointer text-white"
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
          <div className="grid grid-cols-5 gap-5">
            {products.slice(0, 5).map((item, index) => {
              return (
                <>
                  <div className="rounded-10px border">
                    <ProductComponent data={item} index={index + 1} />
                  </div>
                </>
              )
            })}
          </div>
          <div className="absolute -right-[4%] z-20 mr-1 grid h-10 w-8 cursor-pointer  items-center justify-center rounded border bg-green-3ba66b">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 cursor-pointer text-white "
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
    </div>
  )
}

export default everyone(DetailProduct)
