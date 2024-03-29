import get from 'lodash/get'
import { Link } from 'prensa'
import PropTypes from 'prop-types'
import React from 'react'

import { YouTubeEmbed } from '../Embeds'
import * as S from './index.styled'

const Container = ({ children, featured, mb, value }) => {
  if (featured) return <S.BoxFeatured mb={mb} value={value} />
  return <S.Box mb={mb}>{children}</S.Box>
}

const ArticleImage = ({
  amp,
  ampElementProps,
  caption,
  clickToOpen,
  customClick,
  featured,
  handleImage,
  height,
  image,
  mb,
  px,
  py,
  value,
  width,
  widthBox,
  type
}) => {
  if (!image) return null
  const showCaption = get(caption, 'show', false)
  const captionValue = get(caption, 'value', false)
  const fontFamily = get(caption, 'fontFamily', '')
  const fontSize = get(caption, 'fontSize', '')
  const lineHeight = get(caption, 'lineHeight', '')

  const Video = () => (
    <YouTubeEmbed
      amp={amp}
      ampElementProps={ampElementProps}
      url={value}
      height={height}
      width={width}
      mb='0px'
    />
  )

  const Image = () => {
    if (handleImage) {
      return handleImage({
        alt: captionValue,
        height,
        src: value,
        width
      })
    }
    if (amp) {
      return (
        <amp-img
          alt={captionValue}
          src={value}
          layout='responsive'
          style={{
            display: 'inline-flex',
            width: '100%'
          }}
          height={height}
          width={width}
        />
      )
    }
    return <img alt={captionValue} src={value} />
  }

  const RenderClickArea = ({ children }) => {
    if (clickToOpen) {
      const clickToOpenHref = customClick ? customClick : value
      return (
        <Link
          href={clickToOpenHref}
          target='_blank'
          rel='noreferrer'
          width='100%'
        >
          {children}
        </Link>
      )
    }
    return <>{children}</>
  }

  const RenderMedia = () => {
    switch (type) {
      case 'video':
        return <Video />
      default:
        return <Image />
    }
  }

  return (
    <Container featured={featured} mb={mb} value={value}>
      <RenderClickArea>
        <RenderMedia />
      </RenderClickArea>
      {showCaption && captionValue && (
        <S.SubtitleBox px={px} py={py} widthBox={widthBox}>
          <S.Subtitle
            fontFamily={fontFamily}
            fontSize={fontSize}
            lineHeight={lineHeight}
          >
            {captionValue}
          </S.Subtitle>
        </S.SubtitleBox>
      )}
    </Container>
  )
}

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  featured: PropTypes.bool,
  mb: PropTypes.array,
  value: PropTypes.string
}

ArticleImage.defaultProps = {
  featured: false,
  image: true,
  caption: {
    fontFamily: 'secondary',
    fontSize: ['14px', '14px'],
    lineHeight: ['130%', '130%'],
    show: true,
    value: 'Legenda da Imagem'
  },
  clickToOpen: false,
  customClick: '',
  handleImage: false,
  height: '640px',
  mb: [2, 2],
  px: [3, 4],
  py: [3, 2],
  value: 'https://xprog.com.br/static/images/img-destak.jpg',
  width: '1280px',
  widthBox: ['calc(100% - 48px)', 'calc(100% - 64px)']
}

ArticleImage.propTypes = {
  amp: PropTypes.bool,
  caption: PropTypes.object,
  clickToOpen: PropTypes.bool,
  customClick: PropTypes.string,
  featured: PropTypes.bool,
  height: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  handleImage: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  image: PropTypes.bool,
  mb: PropTypes.array,
  px: PropTypes.array,
  py: PropTypes.array,
  value: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  widthBox: PropTypes.array,
  type: PropTypes.oneOf(['image', 'video'])
}

export default ArticleImage
