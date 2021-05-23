import PropTypes from 'prop-types';
import React from 'react';

import Block from '../../Block';
import Typography from '../../Typography';

export const Author = ({children}) => 
  <Typography 
    color='neutral2'
    fontFamily='secondary'
    fontSize='14px'
    fontWeight={700}
    mb='1'>
    {children}
  </Typography>;

Author.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array, 
    PropTypes.object, 
    PropTypes.string
  ])
};

export const Container = ({children}) => 
  <Block 
    width='100%'
    lg={{
      align: 'row',
      alignx: 'between'
    }}>
    {children}
  </Block>;

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

export const Content = ({children}) => 
  <Block
    align='column'
    mb={4}
    width='100%'
    md={{
      align: 'row',
      aligny: 'between'
    }}>
    {children}
  </Block>;

Content.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

export const DateLine = ({children}) => 
  <Block 
    mb='2'
    md={{
      mb: '0px'
    }}
    width='calc(100% - 76px)'>
    {children}
  </Block>;

DateLine.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

export const TimeEntry = ({children}) => 
  <Typography 
    color='neutral2'
    fontFamily='secondary'
    fontSize='12px'
    fontWeight={400}
    mb='1'>
    {children}
  </Typography>;

TimeEntry.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array, 
    PropTypes.object, 
    PropTypes.string
  ])
};