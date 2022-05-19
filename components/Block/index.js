import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { withTheme } from 'styled-components'

import { parseProps } from './parseRender'

const Component = styled.div`
  ${props => parseProps('', props)};
  ${props => props.xs && parseProps('xs', props)};
  ${props => props.sm && parseProps('sm', props)};
  ${props => props.md && parseProps('md', props)};
  ${props => props.lg && parseProps('lg', props)};
  ${props => props.xl && parseProps('xl', props)};
`

const Block = ({
  children,
  className,
  align,
  alignx,
  aligny,
  bgColor,
  boxShadow,
  customDef,
  fontColor,
  py,
  px,
  pt,
  pr,
  pb,
  pl,
  my,
  mx,
  mt,
  mr,
  mb,
  ml,
  typography,
  onClick,
  // fullWidth,
  fullHeight,
  custom,
  width,
  height,
  id,
  bt,
  br,
  bb,
  bl,
  b,
  borderColor,
  borderStyle,
  radius,
  dangerouslySetInnerHTML,
  xs,
  sm,
  md,
  lg,
  xl,
  maxWidth,
  minHeight,
  minWidth
}) => {

  const getXsProps = () => xs && ({
    ...xs,
    $width: xs.width ? xs.width : width,
    $height: xs.height ? xs.height : height,
  })
  const getSmProps = () => sm && ({
    ...sm,
    $width: sm.width ? sm.width : width,
    $height: sm.height ? sm.height : height,
  })
  const getMdProps = () => md && ({
    ...md,
    $width: md.width ? md.width : width,
    $height: md.height ? md.height : height,
  })
  const getLgProps = () => lg && ({
    ...lg,
    $width: lg.width ? lg.width : width,
    $height: lg.height ? lg.height : height,
  })
  const getXlProps = () => xl && ({
    ...xl,
    $width: xl.width ? xl.width : width,
    $height: xl.height ? xl.height : height,
  })

  return (
    <Component
      align={align}
      alignx={alignx}
      aligny={aligny}
      bgColor={bgColor}
      boxShadow={boxShadow}
      className={className}
      customDef={customDef}
      fontColor={fontColor}
      py={py}
      px={px}
      pt={pt}
      pr={pr}
      pb={pb}
      pl={pl}
      my={my}
      mx={mx}
      mt={mt}
      mr={mr}
      mb={mb}
      ml={ml}
      typography={typography}
      onClick={onClick}
      // fullWidth={fullWidth}
      fullHeight={fullHeight}
      custom={custom}
      $width={width}
      $height={height}
      maxWidth={maxWidth}
      minWidth={minWidth}
      minHeight={minHeight}
      id={id}
      bt={bt}
      br={br}
      bb={bb}
      bl={bl}
      b={b}
      borderColor={borderColor}
      borderStyle={borderStyle}
      $radius={radius}
      xs={getXsProps()}
      sm={getSmProps()}
      md={getMdProps()}
      lg={getLgProps()}
      xl={getXlProps()}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML ? { __html: dangerouslySetInnerHTML } : undefined}>
      {dangerouslySetInnerHTML ? undefined : children}
    </Component>
  )
}

Block.defaultProps = {
  align: 'column',
  alignx: 'left',
  aligny: 'top',
}

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
   * Define propriedade box-shadow
   */
  boxShadow: PropTypes.string,
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
   * Permite passagem de um class para o elemento raíz (faz referência a prop do html)
   */
  className: PropTypes.string,
  dangerouslySetInnerHTML: PropTypes.any,
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
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  minHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  minWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bt: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  br: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bb: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bl: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  b: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderColor: PropTypes.string,
  borderStyle: PropTypes.string,
  radius: PropTypes.string,
}

export default withTheme(Block)