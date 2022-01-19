/// <reference types="react" />
import { IconProps } from './types';
declare const Icon: {
    ({ children, color, height, viewBox, width, ...otherProps }: IconProps): JSX.Element;
    defaultProps: {
        height: string;
        viewBox: string;
        width: string;
    };
};
export default Icon;
