/// <reference types="react" />
import { BioProps, ContainerProps, ContentWrapProps, ImageContainerProps, ImageProps, NameProps, SocialMediasWrapProps, TextWrapProps, TitleProps } from './types';
export declare const Bio: ({ children, ...otherProps }: BioProps) => JSX.Element;
export declare const Name: ({ children, ...otherProps }: NameProps) => JSX.Element;
export declare const Title: ({ children, ...otherProps }: TitleProps) => JSX.Element;
export declare const Container: ({ children, ...otherProps }: ContainerProps) => JSX.Element;
export declare const ImageContainer: ({ children, mb, mr }: ImageContainerProps) => JSX.Element;
export declare const ContentWrap: ({ children }: ContentWrapProps) => JSX.Element;
export declare const ImageWrap: ({ children, size, ...otherProps }: ImageProps) => JSX.Element;
export declare const SocialMediasWrap: ({ children }: SocialMediasWrapProps) => JSX.Element;
export declare const TextWrap: ({ children }: TextWrapProps) => JSX.Element;
