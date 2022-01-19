/// <reference types="react" />
import { ColorizedColumnProps, ColumnProps } from './types';
export declare const Column: ({ children }: ColumnProps) => JSX.Element;
export declare const ColumnColor: ({ bgColor, children, minHeight, transparent }: ColorizedColumnProps) => JSX.Element;