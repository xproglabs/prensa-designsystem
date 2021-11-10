export interface AuthorBioProps {
  children?: any;
  color?: string;
  fontSize?: string;
  fontWeight?: number;
}

export interface AuthorTitleProps {
  children?: any;
  color?: string;
  fontSize?: string;
  fontWeight?: number;
}

export interface ContainerProps {
  authorBio?: string;
  authorBioProps?: AuthorBioProps
  authorTitle?: string;
  authorTitleProps?: AuthorTitleProps;
  b?: string;
  bgColor?: string;
  borderColor?: string;
  children?: any;
  color?: string;
  columnTitle?: string;
  columnTitleProps?: ColumnTitleProps;
  containerProps?: ContainerProps;
  fontSize?: string;
  fontWeight?: number;
  mb?: string | number;
  radius?: string;
}

export interface ContainerCenterProps {
  children?: any;
}

export interface ContainerImageProps {
  children?: any;
}

export interface ContainerMediasProps {
  children?: any;
}

export interface ContainerTitlesProps {
  children?: any;
}

export interface ContentProps {
  children?: any;
}

export interface ContentImageProps {
  children?: any;
}

export interface ColumnTitleProps {
  children?: any;
  color?: string;
  fontSize?: string;
  fontWeight?: number;
  mb?: string | number;
}

export interface ImageProps {
  children?: any;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  mb?: string | number;
}