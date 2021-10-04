export interface TextItemProps {
  /**
   * @description Define a cor do texto
   */
  color: string;
  /**
   * @description Define o texto a ser renderizado
   */
  text: string;
}

export interface CopyrightProps {
  /**
   * @description Define a cor background 
   */
  bgColor: string;
  /**
   * @description Define a cor do texto
   */
  color?: string;
  /**
   * @description Define o texto a ser inserido na mensagem de Copyright
   */
  text: string;
  /**
   * @description Define texto da ATEX
   */
  textAtex: string;
  /**
   * @description Define texto da XPROG
   */
  textXprog: string;
}