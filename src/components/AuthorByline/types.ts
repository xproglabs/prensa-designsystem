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
  fontSizeArticle?: string;
  fontSizeColumn?: string;
  fontSizeNews?: string;
  fontWeightArticle?: string;
  fontWeightAuthor?: string;
  fontWeightColumn?: string;
  fontWeightNews?: string;
  mb?: string | number;
  newsTitle?: string;
  newsTitleColor?: string;
  newsTitleMargin?: string | number;
  radius?: string;
}
export interface ColumnTitleProps {
  children: any;
  color: string;
  fontSize: string;
  fontWeight: string;
  mb: string | number; 
}

export interface NewsTitleProps {
  children: any;
  color: string;
  fontWeight: string;
  fontSize: string;
  mb?: string | number;
}
