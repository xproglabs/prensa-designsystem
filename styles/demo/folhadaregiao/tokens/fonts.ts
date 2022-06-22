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
  line_height: '110%'
}
export const NEWS_TITLE_2: TokenProps = {
  font_size: '42px',
  line_height: '110%'
}
export const NEWS_TITLE_3: TokenProps = {
  font_size: '34px',
  line_height: '110%'
}
export const NEWS_TITLE_4: TokenProps = {
  font_size: '28px',
  line_height: '110%'
}
export const NEWS_TITLE_5: TokenProps = {
  font_size: '24px',
  line_height: '115%'
}
export const NEWS_TITLE_6: TokenProps = {
  font_size: '20px',
  line_height: '115%'
}
export const NEWS_TITLE_7: TokenProps = {
  font_size: '16px',
  line_height: '115%'
}
export const NEWS_TITLE_8: TokenProps = {
  font_size: '14px',
  line_height: '115%'
}

export const tokensFonts = { NEWS_TITLE_1, NEWS_TITLE_2, NEWS_TITLE_3, NEWS_TITLE_4, NEWS_TITLE_5, NEWS_TITLE_6, NEWS_TITLE_7, NEWS_TITLE_8 }

// parse style para unir 2 tokens no estilo responsivo
export const parseFonts = (
  mobile: TokenProps,
  desktop: TokenProps
): FontProps => {
  return {
    font_size: [
      mobile.font_size,
      desktop.font_size,
    ],
    line_height: [
      mobile.line_height,
      desktop.line_height
    ]
  }
}