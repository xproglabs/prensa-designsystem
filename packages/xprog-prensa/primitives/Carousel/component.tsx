import React from 'react'
import { Carousel as ReactResponsiveCarousel } from 'react-responsive-carousel'

import { Block } from '../Block'
import { CarouselProps } from './types'

export const Carousel: React.FC<CarouselProps> = ({ css, children, height, width, ...otherProps }) => {

  const styles = {
    height: height,
    width: width,
    '.carousel-root': {
      outline: 'none',
      height: height,
      ...css?.root
    },
    '.carousel .slider': {
      margin: '0',
      padding: '0',
      position: 'relative',
      listStyle: 'none',
      height: height,
      width: '100%',
      ...css?.slider
    },
    '.carousel .slide': {
      align: ['row', 'center', 'middle'],
      minWidth: '100%',
      margin: '0',
      position: 'relative',
      textAlign: 'center',
      ...css?.slide
    },
    '.carousel .control-dots': {
      position: 'absolute',
      bottom: '0',
      margin: '10px 0',
      padding: '0',
      textAlign: 'center',
      width: '100%',
      zIndex: 1,
      ...css?.controlDots
    },
    '.carousel .control-dots .dot': {
      WebkitTransition: 'opacity 0.25s ease-in',
      MozTransition: 'opacity 0.25s ease-in',
      msTransition: 'opacity 0.25s ease-in',
      OTransition: 'opacity 0.25s ease-in',
      transition: 'opacity 0.25s ease-in',
      opacity: 0.3,
      filter: 'alpha(opacity=30)',
      boxShadow: '1px 1px 2px rgba(0, 0, 0, 0.9)',
      background: '#fff',
      borderRadius: '50%',
      width: '8px',
      height: '8px',
      cursor: 'pointer',
      display: 'inline-block',
      margin: '0 8px',
      ...css?.controlDotsDot
    },
    '.carousel': {
      position: 'relative',
      width: '100%',
      ...css?.carousel
    },
    '.carousel .thumbs-wrapper': {
      margin: '20px',
      overflow: 'hidden',
      ...css?.sliderThumbsWrapper
    },
    '.carousel .thumbs': {
      align: ['row', 'left', 'middle'],
      paddingLeft: '0px',
      WebkitTransition: 'all 0.15s ease-in',
      MozTransition: 'all 0.15s ease-in',
      msTransition: 'all 0.15s ease-in',
      OTransition: 'all 0.15s ease-in',
      transition: 'all 0.15s ease-in',
      WebkitTransform: 'translate3d(0, 0, 0)',
      MozTransform: 'translate3d(0, 0, 0)',
      msTransform: 'translate3d(0, 0, 0)',
      OTransform: 'translate3d(0, 0, 0)',
      transform: 'translate3d(0, 0, 0)',
      position: 'relative',
      listStyle: 'none',
      whiteSpace: 'nowrap',
      ...css?.sliderThumbsAnimated
    },
    '.carousel.carousel-slider .control-arrow': {
      WebkitTransition: 'all 0.25s ease-in',
      MozTransition: 'all 0.25s ease-in',
      msTransition: 'all 0.25s ease-in',
      OTransition: 'all 0.25s ease-in',
      transition: 'all 0.25s ease-in',
      opacity: 0.4,
      filter: 'alpha(opacity=40)',
      position: 'absolute',
      zIndex: 2,
      background: 'red',
      border: '0',
      fontSize: '32px',
      cursor: 'pointer',
      outline: '0',
      top: '50%',
    },
    '.carousel .control-arrow:hover': {
      opacity: 1,
      filter: 'alpha(opacity=100)'
    },
    '.carousel .control-arrow:focus': {
      opacity: 1,
      filter: 'alpha(opacity=100)'
    },
    '.carousel.carousel-slider .control-arrow:before': {
      margin: '0 5px',
      display: 'inline-block',
      borderTop: '8px solid transparent',
      borderBottom: '8px solid transparent',
      content: ''
    },
    '.carousel .control-arrow:before': {
      margin: '0 5px',
      display: 'inline-block',
      borderTop: '8px solid transparent',
      borderBottom: '8px solid transparent',
      content: ''
    },
    '.carousel .control-disabled.control-arrow': {
      opacity: 0,
      filter: 'alpha(opacity=0)',
      cursor: 'inherit',
      display: 'none'
    },
    '.carousel .control-prev.control-arrow': { left: '0' },
    '.carousel .control-prev.control-arrow:before': {
      borderRight: '8px solid #fff'
    },
    '.carousel .control-next.control-arrow': { right: '0' },
    '.carousel .control-next.control-arrow:before': {
      borderLeft: '8px solid #fff'
    },
    '.carousel *': {
      WebkitBoxSizing: 'border-box',
      MozBoxSizing: 'border-box',
      boxSizing: 'border-box'
    },
    '.carousel img': {
      width: '100%',
      display: 'inline-block',
      pointerEvents: 'none'
    },
    '.carousel .carousel': {
      position: 'relative'
    },
    '.carousel .thumb': {
      WebkitTransition: 'border 0.15s ease-in',
      MozTransition: 'border 0.15s ease-in',
      msTransition: 'border 0.15s ease-in',
      OTransition: 'border 0.15s ease-in',
      transition: 'border 0.15s ease-in',
      display: 'inline-block',
      marginRight: '6px',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      border: '3px solid #fff',
      padding: '2px',
      height: '48px',
      width: '48px'
    },
    '.carousel .thumb:focus': { border: '3px solid #ccc', outline: 'none' },
    '.carousel .thumb:hover': {
      border: '3px solid #333'
    },
    '.carousel .thumb.selected': {
      border: '3px solid #333'
    },
    '.carousel .thumb img': {
      verticalAlign: 'top',
      height: '100%',
      width: '100%'
    },
    '.carousel.carousel-slider': {
      position: 'relative',
      margin: '0',
      overflow: 'hidden'
    },
    '.carousel.carousel-slider .control-arrow:hover': {
      background: 'rgba(0, 0, 0, 0.2)'
    },
    '.carousel .slider-wrapper': {
      overflow: 'hidden',
      margin: 'auto',
      width: '100%',
      WebkitTransition: 'height 0.15s ease-in',
      MozTransition: 'height 0.15s ease-in',
      msTransition: 'height 0.15s ease-in',
      OTransition: 'height 0.15s ease-in',
      transition: 'height 0.15s ease-in'
    },
    '.carousel .slider-wrapper.axis-horizontal .slider': {
      msBoxOrient: 'horizontal',
      display: 'flex'
    },
    '.carousel .slider-wrapper.axis-horizontal .slider .slide': {
      flexDirection: 'column',
      flexFlow: 'column'
    },
    '.carousel .slider-wrapper.axis-vertical': {
      msBoxOrient: 'horizontal',
      display: 'flex'

    },
    '.carousel .slider-wrapper.axis-vertical .slider': {
      WebkitFlexDirection: 'column',
      flexDirection: 'column'
    },
    '.carousel .slider.animated': {
      WebkitTransition: 'all 0.35s ease-in-out',
      MozTransition: 'all 0.35s ease-in-out',
      msTransition: 'all 0.35s ease-in-out',
      OTransition: 'all 0.35s ease-in-out',
      transition: 'all 0.35s ease-in-out'
    },
    '.carousel .slide img': {
      width: '100%',
      verticalAlign: 'top',
      border: '0'
    },
    '.carousel .slide iframe': {
      display: 'inline-block',
      width: 'calc(100% - 80px)',
      margin: '0 40px 40px',
      border: '0'
    },
    '.carousel .slide .legend': {
      WebkitTransition: ['all 0.5s ease-in-out', 'opacity 0.35s ease-in-out'],
      MozTransition: ['all 0.5s ease-in-out', 'opacity 0.35s ease-in-out'],
      msTransition: ['all 0.5s ease-in-out', 'opacity 0.35s ease-in-out'],
      OTransition: ['all 0.5s ease-in-out', 'opacity 0.35s ease-in-out'],
      transition: ['all 0.5s ease-in-out', 'opacity 0.35s ease-in-out'],
      position: 'absolute',
      bottom: '40px',
      left: '50%',
      marginLeft: '-45%',
      width: '90%',
      borderRadius: '10px',
      background: '#000',
      color: '#fff',
      padding: '10px',
      fontSize: '12px',
      textAlign: 'center',
      opacity: 0.25
    },
    '@media (min-width: 960px)': {
      '.carousel .control-dots': {
        bottom: '0'
      }
    },
    '.carousel .control-dots .dot:hover': {
      opacity: 1,
      filter: 'alpha(opacity=100)'
    },
    '.carousel .control-dots .dot.selected': {
      opacity: 1,
      filter: 'alpha(opacity=100)'
    },
    '.carousel .carousel-status': {
      position: 'absolute',
      top: '0',
      right: '0',
      padding: '5px',
      fontSize: '10px',
      textShadow: '1px 1px 1px rgba(0, 0, 0, 0.9)',
      color: '#fff'
    },
    '.carousel:hover .slide .legend': { opacity: 1 }
  }  

  return (
    <Block className='pds-Carousel-container' css={styles}>
      <ReactResponsiveCarousel
        {...otherProps}
      >
        {children}
      </ReactResponsiveCarousel>
    </Block>
  )
}