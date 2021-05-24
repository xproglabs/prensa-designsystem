import PropTypes from 'prop-types';
import React from 'react';

import Block from '../Block';

export const Container = ({
  children,
  maxWidth
}) => 
  <Block
    align='column'
    alignx='center'
    lg={{
      custom: `max-width: ${maxWidth};`
    }}
    mt='2'
    width='100%'>
    {children}
  </Block>;

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  maxWidth: PropTypes.string
};

export const Content = ({children}) => 
  <Block
    px='2'
    width='calc(100% - 32px)'>
    {children}
  </Block>;

Content.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};
  
export const ContainerFeatured = ({children}) => 
  <Block
    align='column'
    aligny='bottom'
    alignx='center'
    bgColor='neutral2'
    mt='140px'
    mb='4'
    width='100%'>
    {children}
  </Block>;

ContainerFeatured.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};
  
export const ContentFeatured = ({children}) => 
  <Block
    alignx='left'
    custom={`
      max-width: 1008px;
      position: absolute;
    `}
    lg={{
      mb: 6
    }}
    px='2'
    pb='2'
    width='calc(100% - 32px)'>
    {children}
  </Block>;

ContentFeatured.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

export const ContentImage = ({children}) => 
  <Block
    custom={`
      opacity: 0.5;
    `}
    lg={{
      height: '520px'
    }}
    height='420px'
    width='100%'>
    {children}
  </Block>;

ContentImage.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

export const MaxW = ({
  children, 
  maxWidth
}) => 
  <Block
    custom={`
      max-width: ${maxWidth};
    `}
    lg={{
      px: '0px'
    }}
    px='2'
    width='calc(100% - 32px)'>
    {children}
  </Block>;

MaxW.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  maxWidth: PropTypes.string
};

export const Page = ({children}) => 
  <Block
    lg={{
      align: 'column',
      alignx: 'center'
    }}
    width='100%'>
    {children}
  </Block>;

Page.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};
