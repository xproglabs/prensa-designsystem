import { ComponentType } from 'react';
declare type ContainerProps = {
    mt?: string | number;
    mr?: string | number;
    mb?: string | number;
    ml?: string | number;
    $height: Array<string>;
    $width: Array<string>;
};
/**
 * Prensa | Embeds Container
 * @description A container for web/amp embeds
 * Do NOT use display: flex; in this container. It must render a display: block; property in order to render AMP content
 */
declare const Container: ComponentType<ContainerProps>;
export { Container };
