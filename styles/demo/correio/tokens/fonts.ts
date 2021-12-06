interface FontProps {
  font_size: [string, string];
  line_height: [string, string];
}
interface TokenProps {
  font_size: string;
  line_height: string;
}

export const NEWS_TITLE_1: TokenProps = {
  font_size: '62px',
  line_height: '100%'
}
export const NEWS_TITLE_2: TokenProps = {
  font_size: '50px',
  line_height: '110%'
}
export const NEWS_TITLE_3: TokenProps = {
  font_size: '38px',
  line_height: '110%'
}
export const NEWS_TITLE_4: TokenProps = {
  font_size: '32px',
  line_height: '100%'
}
export const NEWS_TITLE_5: TokenProps = {
  font_size: '24px',
  line_height: '110%'
}
export const NEWS_TITLE_6: TokenProps = {
  font_size: '20px',
  line_height: '110%'
}
export const NEWS_TITLE_7: TokenProps = {
  font_size: '18px',
  line_height: '100%'
}
export const NEWS_TITLE_8: TokenProps = {
  font_size: '16px',
  line_height: '110%'
}

export const tokensFonts = { NEWS_TITLE_1, NEWS_TITLE_2, NEWS_TITLE_3, NEWS_TITLE_4, NEWS_TITLE_5, NEWS_TITLE_6, NEWS_TITLE_7, NEWS_TITLE_8 }

export const APP_FONT_TOKENS = {
  primary: 'Open Sans',
  secondary: 'Open Sans'
}