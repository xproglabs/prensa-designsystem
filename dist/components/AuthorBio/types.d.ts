import { RadiusTokens, ColorTokens, FontTokens } from '@prensa_tokens';
import { ReactNode } from 'react';
export declare type SpacingType = number | string;
export declare type ResponsiveSpacingType = Array<string | number>;
/**
 * Prensa | AuthorBio
 * @description AuthorBio component
 */
export interface AuthorBioProps {
    amp: boolean;
    bio?: string;
    bioProps?: BioProps;
    containerProps?: ContainerProps;
    href?: string;
    imagePath: string;
    imageProps?: ImageProps;
    name?: string;
    nameProps?: NameProps;
    title?: string;
    titleProps?: TitleProps;
    facebookUrl: string;
    instagramUrl: string;
    linkedinUrl: string;
    twitterUrl: string;
}
export declare type BioProps = {
    children?: ReactNode;
    color?: ColorTokens;
    element?: string;
    fontFamily?: FontTokens;
    fontSize?: string;
    fontWeight?: number;
    mb?: SpacingType;
};
export declare type NameProps = {
    children?: ReactNode;
    color?: ColorTokens;
    element?: string;
    fontFamily?: FontTokens;
    fontSize?: string;
    fontWeight?: number;
    mb?: SpacingType;
};
export declare type TitleProps = {
    children?: ReactNode;
    color?: ColorTokens;
    element?: string;
    fontFamily?: FontTokens;
    fontSize?: string;
    fontWeight?: number;
    mb?: SpacingType;
};
export declare type ContainerProps = {
    children?: ReactNode;
    bgColor?: ColorTokens;
    mx?: SpacingType;
    my?: SpacingType;
    pt?: SpacingType;
    pr?: SpacingType;
    pb?: SpacingType;
    pl?: SpacingType;
    mt?: SpacingType;
    mr?: SpacingType;
    mb?: SpacingType;
    ml?: SpacingType;
    bt?: string;
    br?: string;
    bb?: string;
    bl?: string;
    b?: string;
    borderColor?: ColorTokens;
    borderStyle?: string;
    radius?: RadiusTokens;
    width?: string;
};
export declare type ImageContainerProps = {
    children?: ReactNode;
    mb?: ResponsiveSpacingType;
    mr?: ResponsiveSpacingType;
};
export declare type ContentWrapProps = {
    children?: ReactNode;
};
export declare type ImageProps = {
    children?: ReactNode;
    size?: Array<string>;
};
export declare type SocialMediasWrapProps = {
    children?: ReactNode;
};
export declare type TextWrapProps = {
    children?: ReactNode;
};
export declare type IconProps = {
    color?: ColorTokens;
    href: string;
};
