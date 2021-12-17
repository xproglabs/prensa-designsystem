import PropTypes from 'prop-types'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import styled from 'styled-components'

import Block from '../Block'
import Typography from '../Typography'

const Container = styled.div`
  height: max-content;
  margin-bottom: 24px;
  width: 100%;
  @media (min-width: ${props => props.theme.queries.md}) {
    width: ${props => props.$width};
    height: ${props => props.$height};
  }
`

const SubtitleBox = ({ children }) => (
  <Block
    bgColor='neutral9'
    px={3}
    py={3}
    width='calc(100% - 48px)'
    lg={{
      px: 4,
      py: 2,
      width: 'calc(100% - 64px)'
    }}
  >
    {children}
  </Block>
)

SubtitleBox.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  px: PropTypes.array,
  py: PropTypes.array,
  width: PropTypes.array
}

const Subtitle = ({
  children,
  fontFamily,
  fontSize,
  lineHeight
}) => (
  <Typography 
    color='neutral4'
    dangerouslySetInnerHTML={children}
    element="p"
    fontFamily={fontFamily}
    fontSize={fontSize[0]}
    lineHeight={lineHeight[0]}
    lg={{
      fontSize: fontSize[1],
      lineHeight: lineHeight[1]
    }}
  />
)
  
Subtitle.propTypes = {
  children: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.array,
  lineHeight: PropTypes.array
}

const Image = styled.img`
  height: 360px;
  object-fit: contain;
  object-position: center;
  @media (min-width: ${props => props.theme.queries.md}) {
    width: 768px;
    height: 500px;
  }
`

const WebCarousel = styled(Carousel)`
  .carousel-root {
    outline: none; 
  }
  .carousel {
    position: relative;
    width: 100%; 
  }
  .carousel * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .carousel img {
    width: 100%;
    display: inline-block;
    pointer-events: none; 
  }
  .carousel .carousel {
    position: relative;
  }
  .carousel.carousel-slider {
    position: relative;
    margin: 0;
    overflow: hidden;
  }
  .carousel .slider-wrapper {
    overflow: hidden;
    margin: auto;
    width: 100%;
    -webkit-transition: height 0.15s ease-in;
    -moz-transition: height 0.15s ease-in;
    -ms-transition: height 0.15s ease-in;
    -o-transition: height 0.15s ease-in;
    transition: height 0.15s ease-in;
  }
  .carousel .slider-wrapper.axis-horizontal .slider {
    -ms-box-orient: horizontal;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -moz-flex;
    display: -webkit-flex;
    display: flex;
  }
  .carousel .slider-wrapper.axis-horizontal .slider .slide {
    flex-direction: column;
    flex-flow: column;
  }
  .carousel .slider {
    margin: 0;
    padding: 0;
    position: relative;
    list-style: none;
    width: 100%;
  }
  .carousel .slider.animated {
    -webkit-transition: all 0.35s ease-in-out;
    -moz-transition: all 0.35s ease-in-out;
    -ms-transition: all 0.35s ease-in-out;
    -o-transition: all 0.35s ease-in-out;
    transition: all 0.35s ease-in-out;
  }
  .carousel .slide {
    min-width: 100%;
    margin: 0;
    position: relative;
    text-align: center;
  }
  .carousel .slide img {
    width: 100%;
    vertical-align: top;
    border: 0;
  }
`

export { Container, Image, SubtitleBox, Subtitle, WebCarousel }