import {FC, useRef} from 'react'
import {formatCurrency} from '../helper/formatCurrency'

export const InputCurrency: FC = () => {
  const inputRef = useRef()
  return (
    <input
      type="text"
      name="entryPrice"
      id="first-name"
      autoComplete="given-name"
      className="col-span-5 block w-full border-b-1 border-gray-300 bg-white py-2 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
      ref={inputRef}
      value={formatCurrency(inputRef.current)}
      // onBlur={(e) => {
      //   e.target.value = formatCurrency(e.target.value)
      // }}
    />
  )
}
