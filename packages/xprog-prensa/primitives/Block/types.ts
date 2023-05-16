import { IBlockStyled } from './styled'

export interface IBlock extends IBlockStyled {
  as?: keyof JSX.IntrinsicElements;
  children?: any;
}