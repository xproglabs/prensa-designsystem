import { Button } from 'prensa'
import React from 'react'

import Block from '../NewBlock'
export interface MoreButtonLayoutProps {
  color?: string,
  border?: string,
  fontSize?: number,
  fontWeight?: number,
  variant?: string,
  width?: string
}

interface MoreButtonProps extends MoreButtonLayoutProps {
  more?: boolean;
  more_title: string;
  more_link: string;
}

const MoreButton = ({
  more,
  color,
  border,
  fontSize,
  fontWeight,
  more_link,
  more_title,
  variant,
  width,
}: MoreButtonProps ) => {
  if (!more) {
    return null
  }
  return (
    <Block
      mb={3}
      width='100%'
    >
      <Button
        color={color}
        borderColor={border}
        fontSize={fontSize}
        fontWeight={fontWeight}
        size={6}
        path={more_link}
        variant={variant}
        width={width}>
        {more_title}
      </Button>
    </Block>
  )
}

MoreButton.defaultProps = {
  color: 'primary1',
  border: 'primary1',
  fontSize: 12,
  fontWeight: 700,
  variant: 'outlined',
  width: '100%'
}

export default MoreButton