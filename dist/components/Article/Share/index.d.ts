/// <reference types="react" />
import { ShareProps } from './types';
declare const Share: {
    (props: ShareProps): JSX.Element;
    defaultProps: {
        size: string;
        facebookPath: string;
        twitterPath: string;
        whatsappPath: string;
    };
};
export default Share;
