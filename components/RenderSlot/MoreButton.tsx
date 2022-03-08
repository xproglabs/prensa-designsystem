import { Button, Block } from 'prensa'
import React from 'react'

export interface MoreButtonLayoutProps {
  color?: string,
  border?: string,
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
      width='100%'>
      <Button
        color={color}
        borderColor={border}
        fontSize={12}
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
  more_button: {
    color: 'primary1',
    border: 'primary1',
    variant: 'outlined',
    width: '100%'
  }
}

export default MoreButton