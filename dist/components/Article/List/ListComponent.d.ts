/// <reference types="react" />
import { ListComponentProps } from './types';
declare const ListComponent: {
    ({ items, itemsSpace, maxWidth, ordered, textProps }: ListComponentProps): JSX.Element;
    defaultProps: {
        itemsSpace: number;
    };
};
export { ListComponent };
