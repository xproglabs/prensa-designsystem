import PropTypes from 'prop-types'
import React from 'react'

import Block from '../../Block'
import Typography from '../../Typography'

export const Author = ({
  children,
  color,
  fontFamily,
  fontSize,
  lineHeight
}) => 
  <Typography 
    color={color}
    element='span'
    fontFamily={fontFamily}
    fontWeight={700}
    fontSize={fontSize[0]}
    lineHeight={lineHeight[0]}
    lg={{
      fontSize: fontSize[1],
      lineHeight: lineHeight[1]
    }}>
    {children}
  </Typography>

Author.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array, 
    PropTypes.object, 
    PropTypes.string
  ]),
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.array,
  lineHeight: PropTypes.array
}

export const Container = ({ children }) => 
  <Block 
    width='100%'
    lg={{
      align: 'row',
      alignx: 'between'
    }}>
    {children}
  </Block>

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
}

export const Content = ({ children, mb }) => 
  <Block
    align='column'
    mb={mb[0]}
    width='100%'
    md={{ align: 'row', aligny: 'middle', mb: mb[1] }}
  >
    {children}
  </Block>

Content.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  mb: PropTypes.array
}

export const BylineContainer = ({ children, mb, width }) => (
  <Block
    align={['row', 'left', 'left']}
    mb={mb[0]}
    lg={{
      mb: mb[1]
    }}
    width={width}
  >
    {children}
  </Block>
)

BylineContainer.defaultProps = {
  mb: [0, 0],
  width: '100%'
}

BylineContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  mb: PropTypes.array
}

export const BylineContent = ({ children, width }) => (
  <Block width={width}>{children}</Block>
)

BylineContent.defaultProps = {
  width: '100%'
}

export const BylineImage = ({ customProps, imageProps, name, path, url }) => {
  if (!path || path == '') {
    return (
      <Block {...customProps}>
        <img src={url} {...imageProps} title={name} />
      </Block>
    )
  }
  return (
    <Block {...customProps}>
      <a href={path} alt={name}>
        <img src={url} {...imageProps} title={name} />
      </a>
    </Block>
  )
}

BylineImage.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  mb: PropTypes.array
}

export const BylineText = ({
  children,
  color,
  fontSize,
  fontFamily,
  lineHeight
}) => 
  <Typography 
    color={color}
    element='span'
    fontFamily={fontFamily}
    fontWeight={400}
    fontSize={fontSize[0]}
    lineHeight={lineHeight[0]}
    lg={{
      fontSize: fontSize[1],
      lineHeight: lineHeight[1]
    }}>
    {children}
  </Typography>

BylineText.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array, 
    PropTypes.object, 
    PropTypes.string
  ]),
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.array,
  lineHeight: PropTypes.array
}