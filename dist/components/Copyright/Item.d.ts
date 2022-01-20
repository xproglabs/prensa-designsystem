/// <reference types="react" />
import { TextItemProps } from './types';
declare const TextItem: {
    ({ color, fontFamily, text }: TextItemProps): JSX.Element;
    defaultProps: {
        color: string;
    };
};
export default TextItem;
