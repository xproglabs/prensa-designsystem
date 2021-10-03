export interface ErrorPageProps {
  buttonAction?: string;
  buttonText?: string;
  colorButton?: string;
  colorTitle?: string;
  message?: string;
  title?: string;
}

export interface PageTitleProps {
  color: string;
  children: string;
}

export interface ButtonProps {
  buttonAction: string;
  children: string;
  color: string;
}

export interface MessageProps {
  children: string;
}