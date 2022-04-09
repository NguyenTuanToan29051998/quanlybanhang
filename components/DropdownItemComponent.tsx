import React, {DOMAttributes, FC} from 'react'

interface Props extends JSX.ElementChildrenAttribute {
  bgColor: string
}

export const DropdownItemComponent: FC<Props> = ({
  bgColor,
  ...otherProps
}: Props) => {
  const {children} = otherProps
  return (
    <li
      className={`grid ${bgColor} bg-opacity-50 text-white hover:bg-opacity-90`}>
      {children}
    </li>
  )
}
