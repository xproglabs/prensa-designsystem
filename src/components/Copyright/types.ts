export interface TextItemProps {
  /**
   * @description Define text color
   */
  color: string;
  /**
   * @description Define text to be rendered
   */
  text: string;
}

export interface CopyrightProps {
  /**
   * @description Define background color for CopyrightContainer
   */
  bgColor: string;
  /**
   * @description Define text color
   */
  color?: string;
  /**
   * @description Define ATEX message
   */
  textAtex: string;
  /**
   * @description Define copyright message
   */
  textCopyright: string;
  /**
   * @description Define company message
   */
  textCompany: string;
  /**
   * @description Define "rights reserved" message
   */
  textRights: string;
  /**
   * @description Define XPROG message
   */
  textXprog: string;
}