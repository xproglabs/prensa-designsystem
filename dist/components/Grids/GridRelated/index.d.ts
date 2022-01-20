/// <reference types="react" />
import { RenderSlotProps } from '../../RenderSlot/types';
declare type GridRelatedProps = RenderSlotProps & {
    enabled: boolean;
    maxWidth: string;
};
declare const GridRelated: {
    ({ enabled, maxWidth, ...otherProps }: GridRelatedProps): JSX.Element;
    defaultProps: {
        enabled: boolean;
        maxWidth: string;
    };
};
export { GridRelated };
