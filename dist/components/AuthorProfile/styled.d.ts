/// <reference types="react" />
import { AuthorNameProps, ContainerProps, ContentProps, DateTimeProps, ImageWrapProps, TitleProps, NewsTitleProps } from './types';
export declare const AuthorName: ({ children, ...otherProps }: AuthorNameProps) => JSX.Element;
export declare const Container: ({ children, ...otherProps }: ContainerProps) => JSX.Element;
export declare const Content: ({ children, className, ...otherProps }: ContentProps) => JSX.Element;
export declare const DateTime: ({ children, ...otherProps }: DateTimeProps) => JSX.Element;
export declare const Image: ({ children, ...otherProps }: {
    [x: string]: any;
    children: any;
}) => JSX.Element;
export declare const ImageWrap: ({ children, ...otherProps }: ImageWrapProps) => JSX.Element;
export declare const NewsTitle: ({ children, ...otherProps }: NewsTitleProps) => JSX.Element;
export declare const Title: ({ children, ...otherProps }: TitleProps) => JSX.Element;
export declare const TitleWrapper: ({ children, ...otherProps }: {
    [x: string]: any;
    children: any;
}) => JSX.Element;
export declare const ResponsiveWrap: import("styled-components").StyledComponent<"div", any, {}, never>;
