/// <reference types="react" />
import { LinkProps } from './types';
/**
 * Prensa | Link component
 * @description Link component is an abstraction for <a/>
 */
declare const Link: ({ children, color, href, height, path, textDecoration, width, ...otherProps }: LinkProps) => JSX.Element;
export default Link;
