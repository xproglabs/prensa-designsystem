import { PrensaColorTokens } from '../../types'
import { StyledButtonTypes } from './styles'

export type ButtonProps = StyledButtonTypes['defaultProps'] & {
  color?: PrensaColorTokens;
  textColor?: PrensaColorTokens;
  variant?: 'filled' | 'outlined' | 'ghost';
  roundedCorners?: boolean;
}