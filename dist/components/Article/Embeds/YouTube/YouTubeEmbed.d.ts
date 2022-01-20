/// <reference types="react" />
import { YouTubeEmbedProps } from './types';
declare const YouTubeEmbed: {
    ({ amp, ampElementProps, elementProps, height, mt, mr, mb, ml, url, width, }: YouTubeEmbedProps): JSX.Element;
    defaultProps: {
        height: string[];
        mb: number;
        width: string[];
    };
};
export { YouTubeEmbed };
