/// <reference types="react" />
import { TwitterEmbedProps } from './types';
declare const TwitterEmbed: {
    ({ amp, ampElementProps, elementProps, height, mb, ml, mr, mt, url, width }: TwitterEmbedProps): JSX.Element;
    defaultProps: {
        height: string[];
        mb: number;
        width: string[];
    };
};
export { TwitterEmbed };
