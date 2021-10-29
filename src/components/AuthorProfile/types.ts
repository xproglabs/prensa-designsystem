export interface ContainerProps {
  authorTitle?: string;
  authorTitleColor?: string;
  b?: string;
  bgColor?: string;
  borderColor?: string;
  children?: any;
  columnTitle?: string;
  columnTitleColor?: string;
  fontSizeAuthor?: string;
  fontSizeColumn?: string;
  fontWeightAuthor?: string;
  fontWeightColumn?: string;
  mb?: string | number;
  radius?: string;
}
export interface ColumnTitleProps {
  children: any;
  color: string;
  fontSize: string;
  fontWeight: string;
  mb: string | number; 
}

export interface AuthorTitleProps {
  children: any;
  color: string;
  fontWeight: string;
  fontSize: string;
}
