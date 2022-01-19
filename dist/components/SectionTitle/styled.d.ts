/// <reference types="react" />
import { StyledBoxProps, StyledTitleProps } from './types';
/**
 * Section Area Box
 * @description Wrap SectionTitle component with responsive margin & padding and border configurations
 */
export declare const AreaBox: ({ area, children }: StyledBoxProps) => JSX.Element;
/**
 * Section Title Empty
 * @description used to space inside cols
 * @returns a blank space as a React element
 */
export declare const TitleEmpty: () => JSX.Element;
/**
 * Section Title Text
 * @param children expects the title text
 * @param color expects a valid token color
 * @param element expects a typography type
 * @param font_family expects a font family token
 * @param font_size expects a font size format
 * @param line_height expects a font size format
 * @param transform expects 'uppercase' || 'lowercase'
 * @returns the title as a React element
 */
export declare const TitleText: {
    ({ children, color, element, font_family, font_size, line_height, transform }: StyledTitleProps): JSX.Element;
    defaultProps: {
        color: string;
        element: string;
        font_family: string;
        font_size: string[];
        line_height: string[];
        transform: string;
    };
};
