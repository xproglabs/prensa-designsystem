/// <reference types="react" />
import { SideMenuProps } from './types';
/**
 * Prensa | SideMenu
 */
declare const SideMenu: {
    ({ amp, ...otherProps }: SideMenuProps): JSX.Element;
    defaultProps: {
        backgroundColor: string;
        height: string;
        layout: string;
        menuAnchor: string;
        width: string[];
    };
};
export default SideMenu;
