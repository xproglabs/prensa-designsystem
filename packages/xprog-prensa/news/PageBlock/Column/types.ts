import * as t from '../types'

interface ColumnHolderProps extends t.ContainerDefaultProps {
  css?: t.CSSType;
  customProps?: t.BlockType;
}

interface ColumnStyledProps extends t.ContainerDefaultProps {
  css?: t.CSSType;
  customProps?: t.BlockType;
}

interface ColumnProps {
  css?: {
    column?: t.CSSType;
    item?: t.CSSType;
  },
  customProps?: {
    column?: t.BlockType;
    item?: t.BlockType;
  },
  itemComponent?: t.ItemDefaultType;
  items?: t.SlotItemsType;
  layout?: t.SlotConfigProps;
  name?: string;
}

export {
  ColumnProps,
  ColumnHolderProps,
  ColumnStyledProps
}