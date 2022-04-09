import React, {FC, useState} from 'react'

interface Props extends JSX.ElementChildrenAttribute {
  data: string
}

export const DropdownMenuComponent: FC<Props> = ({
  data,
  ...otherProps
}: Props) => {
  const {children} = otherProps
  const [showDropdown, setShowDropdown] = useState('hidden')
  return (
    <li
      className="relative mt-[1px] flex self-center "
      onMouseEnter={() => setShowDropdown('')}
      onMouseLeave={() => setShowDropdown('hidden')}>
      <a
        href="#"
        className=" self-center text-sm font-medium text-white hover:text-orange-#ffb416">
        {data}
      </a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 self-center text-white"
        viewBox="0 0 20 20"
        fill="currentColor">
        <path
          fillRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
      <ul
        className={`${showDropdown} absolute top-full grid auto-cols-max grid-flow-col rounded-xl bg-green-3ba66b bg-opacity-80`}>
        <div className="p-3">{children}</div>
      </ul>
    </li>
  )
}
