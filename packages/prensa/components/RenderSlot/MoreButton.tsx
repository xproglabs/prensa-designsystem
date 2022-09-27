import { Button, Block, Typography } from 'prensa'
import React from 'react'

export interface MoreButtonLayoutProps {
  color?: string,
  fontColor?: string,
  border?: string,
  fontSize?: number,
  fontWeight?: number,
  size?: string | number,
  variant?: string,
  width?: string
}

interface MoreButtonProps extends MoreButtonLayoutProps {
  more?: boolean;
  more_title: string;
  more_link: string;
}

const MoreButton = ({
  border,
  color,
  fontColor,
  fontSize,
  fontWeight,
  more,
  more_link,
  more_title,
  size,
  variant,
  width,
}: MoreButtonProps ) => {
  if (!more) {
    return null
  }
  return (
    <Block
      mb={3}
      width='100%'>
      <Button
        color={color}
        borderColor={border}
        fontSize={fontSize}
        fontWeight={fontWeight}
        size={size}
        path={more_link}
        variant={variant}
        width={width}>
        <Typography element='span' color={fontColor}>
          {more_title}
        </Typography>  
      </Button>
    </Block>
  )
}

MoreButton.defaultProps = {
  color: 'primary1',
  border: 'primary1',
  fontColor: 'primary1',
  fontSize: 12,
  fontWeight: 700,
  size: 6,
  variant: 'outlined',
  width: '100%'
}

export default MoreButton