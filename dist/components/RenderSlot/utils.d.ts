import { ReactElement } from 'react';
export declare const parseTeaserProps: (key: any, layout: any, layouts: any, slot: any, teasers: any) => {
    layout: any;
    related: {
        enabled: boolean;
        items: any[];
    };
};
/**
 * Render_space function
 * @param component Expects a ReactElement
 * @returns a React cloneElement hook for rendering the component passed as a prop
 */
export declare const renderSpaceSlot: (component: ReactElement) => ReactElement<any, string | import("react").JSXElementConstructor<any>>;
