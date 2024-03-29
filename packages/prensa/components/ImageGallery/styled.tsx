//@ts-nocheck
import { Carousel } from 'react-responsive-carousel'
import styled from 'styled-components'

import { ContainerProps } from './types'

const Container = styled.div<ContainerProps>`
  background-color: #EAEAEA;
  width: ${props => props.$width[0]};
  height: ${props => props.$height[0]};
  margin-bottom: 24px;
  amp-carousel {
    width: ${props => props.$width[0]};
    height: ${props => props.$height[0]};
  }
  @media (min-width: ${props => props.theme.queries.md}) {
    width: ${props => props.$width[1]};
    height: ${props => props.$height[1]};
    amp-carousel {
      width: ${props => props.$width[1]};
      height: ${props => props.$height[1]};
    }
  }
`

const Content = styled.div`
  amp-img {
    height: 360px;
    width: 100%;
    img {
      object-fit: contain;
      object-position: center;
    }
  }
  @media (min-width: ${props => props.theme.queries.md}) {
    amp-img {
      height: 500px;
      width: 768px;
    }
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

export { Container, Content, WebCarousel }