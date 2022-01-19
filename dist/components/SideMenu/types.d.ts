import { ColorTokens } from '@prensa_tokens';
import { ReactNode, MouseEvent } from 'react';
declare type SideMenuPositions = 'left' | 'right';
declare type SideMenuClickFunction = (event: MouseEvent<HTMLElement>, value: any) => void;
declare type SideMenuWidth = [string, string];
/**
 * Prensa | SideMenu API
 */
export interface SideMenuProps {
    amp: boolean;
    backgroundColor?: ColorTokens;
    children?: ReactNode;
    close?: SideMenuClickFunction;
    height?: string;
    id?: string;
    layout?: string;
    menuAnchor?: SideMenuPositions;
    open?: boolean;
    px?: string;
    py?: string;
    width?: SideMenuWidth;
}
export interface SideMenuAmpProps {
    backgroundColor?: ColorTokens;
    children?: ReactNode;
    height?: string;
    id?: string;
    layout?: string;
    menuAnchor?: SideMenuPositions;
    px?: string;
    py?: string;
    theme?: any;
    width?: SideMenuWidth;
}
export interface SideMenuWebProps {
    backgroundColor?: ColorTokens;
    children?: ReactNode;
    close?: SideMenuClickFunction;
    height?: string;
    menuAnchor?: SideMenuPositions;
    open?: boolean;
    px?: string;
    py?: string;
    theme?: any;
    width?: SideMenuWidth;
}
export declare type BackdropProps = {
    className?: string;
    hidden?: boolean;
    onClick?: SideMenuClickFunction;
    open: boolean;
};
export declare type ContentProps = {
    children?: ReactNode;
    className?: string;
    hidden?: boolean;
    menuAnchor?: SideMenuPositions;
    open?: boolean;
    px?: string;
    py?: string;
    $backgroundColor?: ColorTokens;
    $height?: string;
    $width?: SideMenuWidth;
};
export declare type AmpMenuContainerProps = {
    children?: ReactNode;
    px?: string;
    py?: string;
    $backgroundColor?: ColorTokens;
    $height?: string;
    $width?: SideMenuWidth;
};
export declare type WebMenuContainerProps = {
    children?: ReactNode;
};
export {};
