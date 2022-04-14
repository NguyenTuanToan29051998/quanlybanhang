import React, {FC, useEffect, useState} from 'react'
import everyone from '../../hocs/everyone'
import {useAppDispatch, useAppSelector} from '../../app/hook'
import {ProductComponent} from '../../components/ProductComponent'

const DetailProduct: FC = () => {
  const products = useAppSelector((state) => state.products)
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
    // console.log((index + 1) % imagesForProduct.length, 'xx')
    // console.log((index1 + 1) % imagesForProduct.length, 'yy')
    // setIndex((index + 1) % imagesForProduct.length)
    // setIndex1((index1 + 1) % imagesForProduct.length)
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
                  alt="Chanh tươi vỏ xanh"
                  data-image="//bizweb.dktcdn.net/thumb/medium/100/431/449/products/sp6.jpg?v=1625548895950"
                  className="swiper-lazy"
                />
              </div>
              <div className="">
                <img
                  height="80"
                  width="80"
                  src="//bizweb.dktcdn.net/thumb/medium/100/431/449/products/sp6-2.jpg?v=1625548896893"
                  alt="Chanh tươi vỏ xanh"
                  data-image="//bizweb.dktcdn.net/thumb/medium/100/431/449/products/sp6-2.jpg?v=1625548896893"
                  className="swiper-lazy"
                />
              </div>
              <div className="swiper-slide swiper-slide-visible">
                <img
                  height="80"
                  width="80"
                  src="//bizweb.dktcdn.net/thumb/medium/100/431/449/products/chanh1.jpg?v=1628523062820"
                  alt="Chanh tươi vỏ xanh"
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
                  alt="Chanh tươi vỏ xanh"
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
                  alt="Chanh tươi vỏ xanh"
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
              Chanh tươi vỏ xanh
            </h1>
            <div className="mb-3">
              <div>
                <span className="text-2xl font-semibold text-[#eb3e32]">
                  30.000₫
                </span>
                <del className="text-sm text-[#b4b4b4]">38.000₫</del>
              </div>
              <span className="text-sm">
                Tiết kiệm:
                <span className="font-semibold">
                  8.000₫ <span>so với giá thị trường</span>
                </span>
              </span>
            </div>
            <div className="mb-3 text-sm">
              <p>
                Chanh là một số loài thực vật cho quả nhỏ, thuộc chi Cam chanh
                (Citrus), khi chín có màu xanh hoặc vàng, thịt quả có vị chua.
              </p>
            </div>
            <div className="">
              <div className="pb-3">
                <div className="mb-1 font-semibold">Trọng lượng </div>
                <div className="flex w-12 justify-center rounded border border-green-3ba66b text-green-3ba66b">
                  1 kg
                </div>
              </div>
              <label className="font-semibold">Số lượng:</label>
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
                  Thêm vào giỏ hàng
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
                alt="100% tự nhiên"
                className="img-responsive"
              />
            </div>
            <div className="info">100% tự nhiên</div>
          </div>
          <div className="mb-4">
            <div className="flex justify-center">
              <img
                src="//bizweb.dktcdn.net/100/431/449/themes/834425/assets/service_2.png?1642042407923"
                alt="Chứng nhận ATTP"
                className="img-responsive"
              />
            </div>
            <div className="info">Chứng nhận ATTP</div>
          </div>
          <div className="mb-4">
            <div className="flex justify-center">
              <img
                src="//bizweb.dktcdn.net/100/431/449/themes/834425/assets/service_3.png?1642042407923"
                alt="Luôn luôn tươi mới"
                className="img-responsive"
              />
            </div>
            <div className="info">Luôn luôn tươi mới</div>
          </div>
          <div className="mb-4">
            <div className="flex justify-center">
              <img
                src="//bizweb.dktcdn.net/100/431/449/themes/834425/assets/service_4.png?1642042407923"
                alt="An toàn cho sức khoẻ"
                className="img-responsive"
              />
            </div>
            <div className="info">An toàn cho sức khoẻ</div>
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
              title="Thông tin sản phẩm">
              Thông tin sản phẩm
            </a>
          </li>
          <li
            className={`w-full py-2 text-center hover:bg-orange-#ffb416 ${
              tabProductPolicy[1] ? 'bg-orange-#ffb416' : ''
            }`}
            onClick={() => setTabProductPolicy([false, true, false])}>
            <a
              className="text-sm font-semibold uppercase"
              title="Chính sách đổi trả">
              Chính sách đổi trả
            </a>
          </li>
          <li
            className={`w-full rounded-tr-xl py-2 text-center hover:bg-orange-#ffb416 ${
              tabProductPolicy[2] ? 'bg-orange-#ffb416' : ''
            }`}
            onClick={() => setTabProductPolicy([false, false, true])}>
            <a
              className="text-sm font-semibold uppercase"
              title=" Hướng dẫn bảo quản">
              Hướng dẫn bảo quản
            </a>
          </li>
        </ul>
        <div className="border p-3">
          <div className={`${tabProductPolicy[0] ? '' : 'hidden'}`}>
            <p className="text-[15px]">
              Chanh là một số loài thực vật cho quả nhỏ, thuộc chi Cam chanh
              (Citrus), khi chín có màu xanh hoặc vàng, thịt quả có vị chua. Quả
              chanh được sử dụng làm thực phẩm trên khắp thế giới - chủ yếu dùng
              nước ép của nó, thế nhưng phần cơm (các múi của chanh) và vỏ
              (zest) cũng được sử dụng, chủ yếu là trong nấu ăn và nướng bánh.
              Nước ép chanh chứa khoảng 5% (khoảng 0,3 mol / lít) axit citric,
              điều này giúp chanh có vị chua, và độ pH của chanh từ 2-3. Điều
              này làm cho nước ép chanh không đắt, có thể sử dụng thay axít cho
              các thí nghiệm khoa học trong giáo dục. Bởi vì có vị chua, nhiều
              thức uống và kẹo có mùi vị đã xuất hiện, bao gồm cả nước chanh.
            </p>
          </div>
          <div className={`${tabProductPolicy[1] ? '' : 'hidden'}`}>
            <p>
              <strong>ND Fresh</strong> là hệ thống cửa hàng thực phẩm sạch uy
              tín nhất ở Việt Nam, chuyên cung cấp thực phẩm sạch tới từng bếp
              ăn của gia đình bạn.
            </p>
            <p>
              <strong>Tầm nhìn: </strong>Được nuôi trồng, chế biến theo phương
              Bio (sinh học), Organic (hữu cơ), Eco (sinh thái); cam kết không
              bán hàng giả, hàng nhái và hàng kém chất lượng. Sản phẩm được giao
              đến tay khách hàng luôn đúng cam kết, đúng chất lượng niệm yết,
              luôn được bảo quản trong môi trường lý tưởng, đảm bảo vệ sinh an
              toàn thực phẩm.
            </p>
            <p>
              <strong>Mục tiêu:</strong> Sản phẩm được giao đến tay khách hàng
              luôn đúng cam kết, đúng chất lượng niệm yết, luôn được bảo quản
              trong môi trường lý tưởng, đảm bảo vệ sinh an toàn thực phẩm.
            </p>
          </div>
          <div className={`${tabProductPolicy[2] ? '' : 'hidden'}`}>
            <p>
              <strong>ND Fresh</strong> là hệ thống cửa hàng thực phẩm sạch uy
              tín nhất ở Việt Nam, chuyên cung cấp thực phẩm sạch tới từng bếp
              ăn của gia đình bạn.
            </p>
            <p>
              <strong>Tầm nhìn: </strong>Được nuôi trồng, chế biến theo phương
              Bio (sinh học), Organic (hữu cơ), Eco (sinh thái); cam kết không
              bán hàng giả, hàng nhái và hàng kém chất lượng. Sản phẩm được giao
              đến tay khách hàng luôn đúng cam kết, đúng chất lượng niệm yết,
              luôn được bảo quản trong môi trường lý tưởng, đảm bảo vệ sinh an
              toàn thực phẩm.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-16">
        <div className="mb-5 grid justify-items-center">
          <a
            className="text-4xl font-bold text-[#3e4a5e] hover:text-orange-#ffb416"
            href="/san-pham-noi-bat"
            title="Sản phẩm liên quan">
            Sản phẩm liên quan
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
          <div className="grid grid-cols-5 gap-6">
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
            title="Sản phẩm liên quan">
            Sản phẩm đã xem
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
          <div className="grid grid-cols-5 gap-6">
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
