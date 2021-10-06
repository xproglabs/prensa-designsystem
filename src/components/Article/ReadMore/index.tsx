import React from 'react'
import Block from '../../Block'
import Button from '../../Button'
import Typography from '../../Typography'
import { ReadMoreProps } from './types'

const ReadMore = ({
  color,
  buttonAction,
  buttonText,
  fontColor,
  size,
  variant,
  text,
  width
}: ReadMoreProps) => {
  return(
    <Block alignx='center'> 
      <Block 
      width='calc(100% - 32px)'
      pl={2}
      height='100%'>
        <Typography
          element='p'
          fontSize='20px'
          lineHeight='180%'
          color='black'>
          {text}
        </Typography>
      </Block>
      <Block
        alignx='center'
        aligny='middle'
        height='100%'
        width='100%'
        mb={2}
        custom={`background:linear-gradient(to bottom, rgba(255, 255, 255, 0) 10%, white 50%, white 100%);
        position:absolute;
        z-index:20`}>
          <Button 
            buttonAction={buttonAction}
            color={color}
            fontColor={fontColor}
            size={size}
            variant={variant}
            width={width}>
              {buttonText}
          </Button>
      </Block>
    </Block>

  )
}
export default ReadMore

ReadMore.defaultProps = {
  buttonText: 'Continue lendo',
  color: 'primary1',
  fontColor: 'white',
  size: '48px',
  variant: 'filled',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequatur voluptates labore praesentium, voluptatum quisquam odio repellendus eos, quaerat dolore magnam blanditiis accusamus id excepturi recusandae dolorem dolores asperiores cupiditate molestiae. Molestias blanditiis ipsum distinctio sint optio illo consequuntur culpa suscipit odio. Quia, perferendis molestiae, quis nobis, tenetur iusto consequuntur ex provident libero corporis ducimus nihil ea eligendi natus? Atque aspernatur dolorum repellendus blanditiis non similique sit illo ullam unde quidem odio, necessitatibus quis, libero sed doloremque nemo voluptates repudiandae praesentium delectus voluptatum, ipsam est sequi architecto. Laudantium, blanditiis vel! Recusandae sint eius adipisci nam aut! Maxime exercitationem, vero alias nesciunt repellat nobis laudantium modi earum deserunt facere velit',
  width: 'calc(100% - 32px)'
}