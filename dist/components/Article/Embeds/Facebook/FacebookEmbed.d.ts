/// <reference types="react" />
import { FacebookEmbedProps } from './types';
declare const FacebookEmbed: {
    ({ amp, ampElementProps, elementProps, fbappid, height, mb, ml, mr, mt, url, width }: FacebookEmbedProps): JSX.Element;
    defaultProps: {
        height: string[];
        mb: number;
        width: string[];
    };
};
export { FacebookEmbed };
