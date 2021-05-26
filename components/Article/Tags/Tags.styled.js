import PropTypes from 'prop-types';
import React from 'react';

import {theme} from '../../../styles/theme';
import Block from '../../Block';

export const Container = ({children}) => 
  <Block 
    align='column'
    mb={5}
    width='100%'
    lg={{
      align: 'row',
    }}>
    {children}
  </Block>; 

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

export const Tag = ({children}) =>
  <Block 
    align='column'
    mr={2}
    mb={2}
    px={2}
    py={1}
    custom={`border: 1px solid ${theme.colors.primary1};border-radius: 3px;`}>
    {children}
  </Block>; 
  
Tag.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};