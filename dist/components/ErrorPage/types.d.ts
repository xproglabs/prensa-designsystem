declare type AlignxProps = 'left' | 'center' | 'right';
export interface ErrorPageProps {
    alignx: AlignxProps;
    buttonAction?: string;
    buttonColor?: string;
    buttonPath?: string;
    buttonText?: string;
    message?: string;
    title?: string;
    titleColor?: string;
}
export interface ButtonProps {
    buttonAction: string;
    children: string;
    color: string;
    path?: string;
}
export interface MessageProps {
    children: string;
}
export interface PageTitleProps {
    color: string;
    children: string;
}
export {};
