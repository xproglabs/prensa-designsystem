/// <reference types="react" />
import { EditAreaType, EditButtonsType } from './types';
/**
 * EditArea allows teaser wysiwyg
 * @param children text to be edited
 * @param enabled check if is enabled
 * @param saving set teaser in edition
 * @param set_modified set teaser in edition
 * @param state reference to field
 * @returns
 */
declare const EditArea: ({ children, enabled, set_modified, set_selected, state }: EditAreaType) => any;
/**
 * EditButtons allows teaser "wysiwyg"
 * @param action to handle submit
 * @param enabled check if is enabled
 * @param reset to handle reset
 * @returns
 */
declare const EditButtons: ({ action, enabled, reset }: EditButtonsType) => JSX.Element;
export { EditArea, EditButtons };
