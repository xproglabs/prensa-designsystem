import React from 'react'

import { WebImageGallery } from '../../../primitives/ImageGallery/index'

export default { title: 'Primitives/ImageGallery', component: WebImageGallery }

const RenderImage = ({ alt, src }) => <img alt={alt} src={src} width='100%' />

export const Default = () => {
  const galleryList = [
    {
      id: 'policy:1.1036593',
      type: 'com.atex.standard.image.ImageContentDataBean',
      version: 'policy:1.1036593:1672580521',
      byline: 'Divulgação/Assembleia SP',
      caption: 'Cerimônia de posse de Tarcísio como novo governador do Estado de São Paulo',
      url: 'https://images.unsplash.com/photo-1616959313137-186688889054?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4170&q=80'
    },
    {
      id: 'policy:1.1036587',
      type: 'com.atex.standard.image.ImageContentDataBean',
      version: 'policy:1.1036587:1672578473',
      byline: 'Reprodução/Rede Alesp',
      caption: 'Tarcísio de Freitas e o presidente da Alesp, Carlão Pignatari',
      url: 'https://images.unsplash.com/photo-1628586165208-0ac525a54757?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80'
    },
    {
      id: 'policy:1.1036594',
      type: 'com.atex.standard.image.ImageContentDataBean',
      version: 'policy:1.1036594:1672580549',
      byline: 'Divulgação/Assembleia SP',
      caption: 'Cerimônia de posse de Tarcísio como novo governador do Estado de São Paulo',
      url: 'https://images.unsplash.com/photo-1628586165208-0ac525a54757?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80'
    },
    {
      id: 'policy:1.1036596',
      type: 'com.atex.standard.image.ImageContentDataBean',
      version: 'policy:1.1036596:1672580575',
      byline: 'Divulgação/Assembleia SP',
      caption: 'Cerimônia de posse de Tarcísio como novo governador do Estado de São Paulo',
      url: 'https://images.unsplash.com/photo-1628586165208-0ac525a54757?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80'
    },
    {
      id: 'policy:1.1036597',
      type: 'com.atex.standard.image.ImageContentDataBean',
      version: 'policy:1.1036597:1672580604',
      byline: 'Divulgação/Assembleia SP',
      caption: 'Cerimônia de posse de Tarcísio como novo governador do Estado de São Paulo',
      url: 'https://images.unsplash.com/photo-1628586165208-0ac525a54757?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80'
    }
  ]
  return (
    <>
      <head>
        <style>
          {`
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
          `}
        </style>
      </head>
      <WebImageGallery
        componentImage={RenderImage}
        captionProps={{ enabled: true }}
        items={galleryList}
      />
    </>
  )
}
