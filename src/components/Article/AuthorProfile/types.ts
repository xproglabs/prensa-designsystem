export interface ContainerProps {
  b: string;
  bgColor: string;
  borderColor: string;
  children: any;
}

export interface AuthorProfileProps {
  authorTitle: string;
  authorTitleColor: string;
  b: string;
  bgColor: string;
  borderColor: string;
  children: any;
  columnTitleColor: string;
  columnTitle: string;
  fontSizeAuthor: string;
  fontSizeColumn: string;
  fontWeightAuthor: string;
  fontWeightColumn: string;
  radius: string;
}

export interface ContentProps {
  children: any;
}

export interface ImageProps {
  children: any;
  radius: string;
}

export interface ColumnTitleProps {
  children: any;
  color: string;
  fontSize: string;
  fontWeight: string
}

export interface AuthorTitleProps {
  color: string;
  children: any;
  fontWeight: string;
  fontSize: string;
}

export interface TitlesProps {
  children: any;
}
