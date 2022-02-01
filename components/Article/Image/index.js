import { get } from 'lodash'
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
  featured,
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
    return (
      <img
        alt={captionValue}
        src={value}
      />
    )
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
      <RenderMedia />
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
    value: 'Legenda da Imagem',
  },
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
  featured: PropTypes.bool,
  height: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
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