import React from 'react'

import Link from '../Link'
import Typography from '../Typography'

export const SectionTitle = ({
  children,
  color,
  font_size=['14px', '18px'],
  line_height=['18px', '22px'],
  mb=['0px', '0px'],
  path
}) => {
  const AreaLinkWrap = () => {
    if(path) {
      return (
        <Link href={path}>
          {children}
        </Link>
      )
    }
    return children
  }
  return (
    <Typography
      color={color}
      element='h3'
      fontFamily='secondary'
      fontSize={font_size[0]}
      fontWeight={700}
      lineHeight={line_height[0]}
      lg={{
        fontSize: font_size[1],
        lineHeight: line_height[1],
        mb: mb[1]
      }}
      mb={mb[0]}
      transform='uppercase'
    >
      <AreaLinkWrap />
    </Typography> 
  )
}