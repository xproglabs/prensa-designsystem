/// <reference types="react" />
import { ContainerProps } from 'components/AuthorProfile/types';
export declare type RenderProfileProps = {
    amp: boolean;
    domain: string;
    content: {
        desc?: string;
        enabled: boolean;
        name: string;
        path: string;
        image?: {
            byline?: string;
            caption?: string;
            contentId?: string;
            subtitle?: string;
            height?: [string, string];
            width?: [string, string];
        };
    };
    className?: string;
    containerProps: ContainerProps;
    subtitleContainer?: any;
};
declare const RenderProfile: ({ amp, domain, content, className, containerProps, subtitleContainer }: RenderProfileProps) => JSX.Element;
export { RenderProfile };
