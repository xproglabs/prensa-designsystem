/// <reference types="react" />
import { CaptionComponentProps } from './types';
declare const Caption: {
    ({ children, fontSize, fontFamily, height, lineHeight }: CaptionComponentProps): JSX.Element;
    defaultProps: {
        fontSize: string[];
        fontFamily: string;
        lineHeight: string[];
    };
};
export { Caption };
