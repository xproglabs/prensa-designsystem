import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import {withTheme} from 'styled-components';

import {parseProps} from './parseRender';

const Component = styled.div`
  ${props => parseProps('', props)};
  ${props => props.xs && parseProps('xs', props)};
  ${props => props.sm && parseProps('sm', props)};
  ${props => props.md && parseProps('md', props)};
  ${props => props.lg && parseProps('lg', props)};
  ${props => props.xl && parseProps('xl', props)};
`;

const Block = props => {

  const getXsProps = () => props.xs && ({
    ...props.xs,
    $width: props.xs.width ? props.xs.width : props.width,
    $height: props.xs.height ? props.xs.height : props.height,
  });
  const getSmProps = () => props.sm && ({
    ...props.sm,
    $width: props.sm.width ? props.sm.width : props.width,
    $height: props.sm.height ? props.sm.height : props.height,
  });
  const getMdProps = () => props.md && ({
    ...props.md,
    $width: props.md.width ? props.md.width : props.width,
    $height: props.md.height ? props.md.height : props.height,
  });
  const getLgProps = () => props.lg && ({
    ...props.lg,
    $width: props.lg.width ? props.lg.width : props.width,
    $height: props.lg.height ? props.lg.height : props.height,
  });
  const getXlProps = () => props.xl && ({
    ...props.xl,
    $width: props.xl.width ? props.xl.width : props.width,
    $height: props.xl.height ? props.xl.height : props.height,
  });

  return (
    <Component
      align={props.align}
      alignx={props.alignx}
      aligny={props.aligny}
      bgColor={props.bgColor}
      customDef={props.customDef}
      fontColor={props.fontColor}
      py={props.py}
      px={props.px}
      pt={props.pt}
      pr={props.pr}
      pb={props.pb}
      pl={props.pl}
      my={props.my}
      mx={props.mx}
      mt={props.mt}
      mr={props.mr}
      mb={props.mb}
      ml={props.ml}
      typography={props.typography}
      onClick={props.onClick}
      fullWidth={props.fullWidth}
      fullHeight={props.fullHeight}
      custom={props.custom}
      $width={props.width}
      $height={props.height}
      id={props.id}
      xs={getXsProps()}
      sm={getSmProps()}
      md={getMdProps()}
      lg={getLgProps()}
      xl={getXlProps()}>
      {props.children}
    </Component>
  );
};

Block.defaultProps = {
  align: 'column',
  alignx: 'left',
  aligny: 'top',
};

Block.propTypes = {
  /**
   * Configuração da orientação de posição
   */
  align: PropTypes.oneOf(['column', 'column-reverse', 'row', 'row-reverse']),
  /**
   * Configuração da posição horizontal (eixo x)
   */
  alignx: PropTypes.oneOf(['left', 'center', 'right', 'evenly', 'between']),
  /**
   * Configuração da posição vertical (eixo y)
   */
  aligny: PropTypes.oneOf(['top', 'middle', 'bottom', 'evenly', 'between']),
  /**
   * Define propriedade de background-color
   */
  bgColor: PropTypes.string,
  /**
   * Define estilo customizado para o bloco
   */
  custom: PropTypes.string,
  /**
   * Seleciona estilo customizado para o bloco
   */
  customDef: PropTypes.string,
  /**
   * Renderiza os blocos filhos
   */
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),
  /**
   * Define propriedade de color
   */
  fontColor: PropTypes.string,
  /**
   * Define propriedade de padding
   */
  py: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  px: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  pt: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  pr: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  pb: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  pl: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Define propriedade de margin
   */
  my: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  mx: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  mt: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  mr: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  mb: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ml: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Define propriedade de color
   */
  typography: PropTypes.oneOf(['primary', 'secondary']),
  /**
   * Define propriedade de dimensões
   */
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Propriedades responsivas
   */
  xs: PropTypes.object,
  sm: PropTypes.object,
  md: PropTypes.object,
  lg: PropTypes.object,
  xl: PropTypes.object,
  /**
   * Propriedades de ações
   */
  onClick: PropTypes.func,
  /**
   * Faz o elemento crescer 100% e ocupar todo o espaço disponível para largura
   */
  fullWidth: PropTypes.bool,
  /**
   * Faz o elemento crescer 100% e ocupar todo o espaço disponível para altura
   */
  fullHeight: PropTypes.bool,
  /**
   * Permite passagem de id para o componente raíz
   */
  id: PropTypes.string,
};

export default withTheme(Block);