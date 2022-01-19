/// <reference types="react" />
declare type LayoutProps = {
    enabled: boolean;
    height: string;
    path: string;
    type: string;
};
interface RenderOpacityMaskprops {
    enabled: boolean;
    layout_desktop: LayoutProps;
    layout_mobile: LayoutProps;
}
declare const RenderOpacityMask: ({ enabled, layout_desktop, layout_mobile }: RenderOpacityMaskprops) => JSX.Element;
export { RenderOpacityMask };
