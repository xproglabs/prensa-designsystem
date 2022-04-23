export type TextItemProps = {
  /**
   * @description Define text color
   */
  color?: string;
  /**
   * @description Expects a font token (e.g. primary/secondary) 
   */
  text?: string;
}

export interface CopyrightProps {
  /**
   * @description Define background color for CopyrightContainer
   */
  bgColor?: string;
  /**
   * @description Define text color
   */
  color?: string;
  /**
   * @description Define copyright message
   */
  pb?: Array<string | number>;
   /**
    * @description Define padding bottom
    */
  textCompany?: string;
  /**
   * @description Define "rights reserved" message
   */
  textRights?: string;
  /**
   * @description Define ATEX message
   */
}