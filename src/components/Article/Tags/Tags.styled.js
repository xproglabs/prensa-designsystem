import PropTypes from 'prop-types'
import React from 'react'

// import {theme} from '../../../styles/theme';
import Block from '../../Block'

export const Container = ({ children, maxWidth }) => 
  <Block 
    align='column'
    mb={5}
    maxWidth={maxWidth}
    width='100%'
    lg={{
      align: 'row',
      custom: `
        flex-wrap: wrap;
      `
    }}>
    {children}
  </Block> 

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  maxWidth: PropTypes.string
}

export const Tag = ({ children, color }) =>
  <Block 
    align='column'
    mr={2}
    mb={2}
    custom={`border: 1px solid ${color};border-radius: 3px;`}>
    {children}
  </Block> 
  
Tag.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  color: PropTypes.string
}