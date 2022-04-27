import {NextPage} from 'next'
import type {AppProps} from 'next/app'
import Image from 'next/image'
import {FC, ReactNode, useEffect, useState} from 'react'
import {NextPageContext} from 'next'
import {useRouter} from 'next/router'
import {useAppDispatch, useAppSelector} from '../redux/hook'

interface GuestWrapperProps {
  pageProps?: object
}

function adminOnly(Content: NextPage): ReactNode {
  const AdminOnlyWrapper: NextPage<GuestWrapperProps> = ({
    pageProps,
  }: GuestWrapperProps) => {
    const router = useRouter()
    const dispatch = useAppDispatch()

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
                Fresh Mart
              </h1>
            </a>
            <div className="flex flex-col">
              <hr className="my-4 min-w-full" />
              <ul className="flex min-w-full list-none flex-col">
                <li className="mb-4 rounded-lg">
                  <a
                    className=" flex items-center gap-4 rounded-lg  bg-gradient-to-r from-sky-500 to-indigo-500 px-4 py-3 text-sm font-light text-gray-700 shadow-md"
                    aria-current="page"
                    onClick={() => router.push('/admin/store')}>
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
                    Cửa hàng
                  </a>
                </li>
                <li className="mb-2 rounded-lg">
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
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Nhân viên
                  </a>
                </li>
                <li
                  className="mb-2 rounded-lg "
                  onClick={() => router.push('/admin/product')}>
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
                        d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                    Sản phẩm
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
                    Hóa đơn
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
        <div className=" h-screen bg-[#eeeeee]">
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
          <Content {...pageProps} />
          <div className="pb-10"></div>
        </div>
        <footer className="flex flex-col items-center justify-between border-t border-gray-200 py-6 px-16 font-light md:ml-64 lg:flex-row">
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
        </footer>
      </>
    )
  }
  AdminOnlyWrapper.getInitialProps = async (
    ctx: NextPageContext,
  ): Promise<object> => {
    return {
      pageProps: Content.getInitialProps
        ? await Content.getInitialProps(ctx)
        : {},
    }
  }

  return AdminOnlyWrapper
}

export default adminOnly
