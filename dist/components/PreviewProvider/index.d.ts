import { PageBlockPreview } from './types';
export interface PreviewProviderProps {
    children: any;
    item: any;
    preview: PageBlockPreview;
}
/**
 * Prensa | PreviewProvider
 * @param props Expects an Object with matching props for PreviewProviderProps interface and custom props
 * @returns |
 * - preview.enabled === false => children component
 * - preview.enabled === true => Children component with preview.render wrapper
 */
declare const PreviewProvider: ({ children, item, preview }: PreviewProviderProps & Object) => any;
export { PreviewProvider };
