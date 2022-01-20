/// <reference types="react" />
import { InstagramEmbedProps } from './types';
declare const InstagramEmbed: {
    ({ amp, ampElementProps, elementProps, clientToken, fbappid, height, mb, ml, mr, mt, url, width }: InstagramEmbedProps): JSX.Element;
    defaultProps: {
        height: string[];
        mb: number;
        width: string[];
    };
};
export { InstagramEmbed };
