/// <reference types="react" />
import { ErrorPageProps } from './types';
declare const ErrorPage: {
    ({ alignx, buttonAction, buttonColor, buttonPath, buttonText, message, title, titleColor }: ErrorPageProps): JSX.Element;
    defaultProps: {
        alignx: string;
        buttonAction: string;
        buttonColor: string;
        buttonText: string;
        message: string;
        title: string;
        titleColor: string;
    };
};
export default ErrorPage;
