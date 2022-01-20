/// <reference types="react" />
import { PageTitleProps, ButtonProps, MessageProps } from './types';
export declare const ButtonGoBack: ({ buttonAction, children, color, path }: ButtonProps) => JSX.Element;
export declare const ContainerError: ({ children }: {
    children: any;
}) => JSX.Element;
export declare const ContentError: ({ alignx, children }: {
    alignx: any;
    children: any;
}) => JSX.Element;
export declare const Message: ({ children }: MessageProps) => JSX.Element;
export declare const PageTitle: ({ color, children }: PageTitleProps) => JSX.Element;
