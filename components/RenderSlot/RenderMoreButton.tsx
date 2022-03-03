import React from 'react'
import { Button, Block } from 'prensa'

export type MoreButtonLayoutProps = {
  color?: string,
  border?: string,
  variant?: string
}

type RenderMoreButtonProps = {
  more?: boolean;
  more_button: MoreButtonLayoutProps;
  more_title: string;
  more_link: string;
}

const RenderMoreButton = ({
  more,
  more_button,
  more_link,
  more_title
}: RenderMoreButtonProps ) => {
  if (!more) {
    return null
  }
  return (
    <Block
      mb={3}
      width='100%'>
      <Button
        color={more_button.color}
        borderColor={more_button.border}
        fontSize={16}
        size={6}
        path={more_link}
        variant={more_button.variant}
        width='calc(100% - 32px)'>
        {more_title}
      </Button>
    </Block>
  )
}

RenderMoreButton.defaultProps = {
  more_button: {
    color: 'primary1',
    border: 'primary1',
    variant: 'filled'
  }
}

export default RenderMoreButton