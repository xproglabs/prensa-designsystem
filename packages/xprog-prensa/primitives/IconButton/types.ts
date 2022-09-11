import { VariantProps } from '@stitches/react'
import { ReactNode } from 'react'

import { PrensaEngineColorType } from '../../types'
import { StyledIconButtonTypes } from './styles'

type IconButtonVariants = VariantProps<StyledIconButtonTypes>

export type IconButtonProps = StyledIconButtonTypes['defaultProps'] & {
  color?: PrensaEngineColorType;
  icon?: ReactNode;
  iconColor?: PrensaEngineColorType;
  variant?: IconButtonVariants['variant'];
  viewBox?: string;
}