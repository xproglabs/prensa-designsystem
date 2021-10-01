export interface ErrorPageProps {
  buttonAction: string;
  buttonText: string;
  colorButton: string;
  colorTitle: string;
  message: string;
  title: string;
}

export interface PageTitleProps {
  children: any;
  color: string;
  text: string;
}

export interface ButtonProps {
  buttonAction: string;
  children: any;
  color: string;
}

export interface MessageProps {
  text: string
}