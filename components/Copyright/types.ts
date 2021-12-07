import { FontTokens } from '@prensa_tokens'

export type TextItemProps = {
  /**
   * @description Define text color
   */
  color?: string;
  /**
   * @description Expects a font token (e.g. primary/secondary) 
   */
  fontFamily?: FontTokens;
  /**
   * @description Define text to be rendered
   */
  text: string;
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
   * @description Expects a font token (e.g. primary/secondary) 
   */
  fontFamily?: FontTokens;
  /**
   * @description Define copyright message
   */
  textCopyright?: string;
  /**
   * @description Define company message
   */
  textCompany?: string;
  /**
   * @description Define "rights reserved" message
   */
  textRights?: string;
  /**
   * @description Define ATEX message
   */
  textAtex: string;
  /**
   * @description Define XPROG message
   */
  textXprog: string;
}