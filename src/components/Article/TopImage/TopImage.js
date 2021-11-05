import { get } from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import YoutubeMedia from '../Embeds/YouTube'
import * as S from './TopImage.styled'

const Container = ({ children, featured, mb, value }) => {
  if (featured) return <S.BoxFeatured mb={mb} value={value} />
  return <S.Box mb={mb}>{children}</S.Box>
}

const TopImage = ({
  amp,
  caption,
  featured,
  height,
  image,
  mb,
  value,
  width,
  type
}) => {
  if (!image) return null
  const caption_value = get(caption, 'value', '')
  const fontFamily = get(caption, 'fontFamily', '')
  const fontSize = get(caption, 'fontSize', '')
  const lineHeight = get(caption, 'lineHeight', '')

  const Video = () => (
    <YoutubeMedia
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
          alt={caption_value}
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
        alt={caption_value}
        src={value}  
      />
    )
  }

  const RenderMedia = () => {
    switch (type) {
      case 'video':
        return <Video/>
      default:
        return <Image/>
    }
  }

  return (
    <Container featured={featured} mb={mb} value={value}>
      <RenderMedia/>
      {caption && caption.show && (
        <S.SubtitleBox>
          <S.Subtitle
            fontFamily={fontFamily}
            fontSize={fontSize}
            lineHeight={lineHeight}
          >
            {caption_value}
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

TopImage.defaultProps = {
  featured: false,
  image: true,
  caption: {
    fontFamily: 'secondary',
    fontSize: ['14px', '14px'],
    lineHeight: ['130%', '130%'],
    show: true,
    value: 'Legenda da Imagem'
  },
  height: '640px',
  mb: [2, 2],
  value: 'https://xprog.com.br/static/images/img-destak.jpg',
  width: '1280px'
}

TopImage.propTypes = {
  amp: PropTypes.bool,
  featured: PropTypes.bool,
  height: PropTypes.string,
  image: PropTypes.bool,
  caption: PropTypes.object,
  mb: PropTypes.array,
  value: PropTypes.string,
  width: PropTypes.string,
  type: PropTypes.oneOf(['image', 'video'])
}

export default TopImage