import { PrensaEngineCSSProp } from '../../../types'
import * as t from '../types'

type SlotLayoutType = PrensaEngineCSSProp | [PrensaEngineCSSProp, PrensaEngineCSSProp]

interface SlotLayoutConfig extends t.ColumnTypes.ColumnProps {
  default?: SlotLayoutType,
  '1'?: SlotLayoutType,
  '2'?: SlotLayoutType,
  '2:1'?: SlotLayoutType,
  '2:2'?: SlotLayoutType,
  '3'?: SlotLayoutType,
  '3:1'?: SlotLayoutType,
  '3:2'?: SlotLayoutType,
  '3:3'?: SlotLayoutType,
  '4'?: SlotLayoutType,
  '4:1'?: SlotLayoutType,
  '4:2'?: SlotLayoutType,
  '4:3'?: SlotLayoutType,
  '4:4'?: SlotLayoutType,
  '5'?: SlotLayoutType,
  '5:1'?: SlotLayoutType,
  '5:2'?: SlotLayoutType,
  '5:3'?: SlotLayoutType,
  '5:4'?: SlotLayoutType,
  '5:5'?: SlotLayoutType,
  '6'?: SlotLayoutType,
  '6:1'?: SlotLayoutType,
  '6:2'?: SlotLayoutType,
  '6:3'?: SlotLayoutType,
  '6:4'?: SlotLayoutType,
  '6:5'?: SlotLayoutType,
  '6:6'?: SlotLayoutType,
  '7'?: SlotLayoutType,
  '7:1'?: SlotLayoutType,
  '7:2'?: SlotLayoutType,
  '7:3'?: SlotLayoutType,
  '7:4'?: SlotLayoutType,
  '7:5'?: SlotLayoutType,
  '7:6'?: SlotLayoutType,
  '7:7'?: SlotLayoutType,
  '8'?: SlotLayoutType,
  '8:1'?: SlotLayoutType,
  '8:2'?: SlotLayoutType,
  '8:3'?: SlotLayoutType,
  '8:4'?: SlotLayoutType,
  '8:5'?: SlotLayoutType,
  '8:6'?: SlotLayoutType,
  '8:7'?: SlotLayoutType,
  '8:8'?: SlotLayoutType
}

export { SlotLayoutConfig }