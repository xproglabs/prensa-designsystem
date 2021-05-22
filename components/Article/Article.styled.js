import PropTypes from 'prop-types';
import React from 'react';

import Block from '../Block';

export const Body = ({children}) => 
  <Block {...{
    px: 3,
    width: 'calc(100% - 48px)',
    lg: {
      align: 'column',
      alignx: 'center',
      width: '100%',
    }
  }}>{children}</Block>;

Body.propTypes = {
  children: PropTypes.object
};

export const Container = ({children}) => 
  <Block {...{
    align: 'column',
    alignx: 'center',
    mt: '170px',
    width: '100%',
    lg: {
      mt: '220px;',
      custom: `
        max-width: 1008px;
      `
    }
  }}>{children}</Block>;

Container.propTypes = {
  children: PropTypes.array
};

export const Content = ({children}) => 
  <Block {...{
    px: 2,
    width: 'calc(100% - 32px)',
  }}>{children}</Block>;

Content.propTypes = {
  children: PropTypes.array
};
  
export const ContainerFeatured = ({children}) => 
  <Block {...{
    align: 'column',
    aligny: 'bottom',
    alignx: 'center',
    bgColor: 'neutral2',
    mt: '140px',
    mb: 4,
    width: '100%'
  }}>{children}</Block>;

ContainerFeatured.propTypes = {
  children: PropTypes.object
};
  
export const ContentFeatured = ({children}) => 
  <Block {...{
    alignx: 'left',
    px: 2,
    pt: '180px',
    pb: 2,
    width: 'calc(100% - 32px)',
    custom: `
      max-width: 1008px;
      position: absolute;
    `,
    lg: {
      mb: 6
    }
  }}>{children}</Block>;

ContentFeatured.propTypes = {
  children: PropTypes.object
};

export const ContentImage = ({children}) => 
  <Block {...{
    width: '100%',
    height: '420px',
    custom: `
      opacity: 0.5;
    `,
    lg: {
      height: '520px',
    }
  }}>{children}</Block>;

ContentImage.propTypes = {
  children: PropTypes.object
};

export const MaxW = ({children}) => 
  <Block {...{
    px: 2,
    width: 'calc(100% - 32px)',
    custom: `
      max-width: 1008px;
    `,
    lg: {
      px: '0px'
    }
  }}>{children}</Block>;

MaxW.propTypes = {
  children: PropTypes.object
};