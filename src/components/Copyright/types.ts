export interface TextItemProps {
  /**
   * @description Insere cor no TextItem
   */
  color: string;
  /**
   * @description Insere texto no TextItem
   */
  text: string;
}

export interface CopyrightProps {
  /**
   * @description Insere background-color no Copyright
   */
  color?: string;
  /**
   * @description Insere texto principal do Copyright
   */
  text: string;
  /**
   * @description Insere texto da ATEX
   */
  textAtex: string;
  /**
   * @description Insere texto da XPROG
   */
  textXprog: string;
}