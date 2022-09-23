import * as t from '../types'

interface ColumnHolderProps extends t.ContainerDefault {
  customCss?: t.CSSType,
  customProps?: t.BlockType
}

interface ColumnStyledProps extends t.ContainerDefault {
  customCss?: t.CSSType,
  customProps?: t.BlockType,
}

interface ColumnProps {
  customCss?: {
    column?: t.CSSType,
    item?: t.CSSType,
  },
  customProps?: {
    column?: t.BlockType,
    item?: t.BlockType
  },
  itemComponent?: t.ItemTypes.ItemDefaultType,
  items?: t.SlotItemsType,
  layout?: t.SlotLayoutConfig,
  name?: string,
}

export {
  ColumnProps,
  ColumnHolderProps,
  ColumnStyledProps
}