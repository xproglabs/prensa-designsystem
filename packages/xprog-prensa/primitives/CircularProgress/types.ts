import { PrensaEngineColorType } from '../../types'

export interface CircularProgressProps {
  dataTestid?: string;
  color?: PrensaEngineColorType;
  backgroundColor?: PrensaEngineColorType;
  percentage?: number;
  size?: number;
  strokeWidth?: number;
}
