interface FontProps {
  font_size: [string, string];
  line_height: [string, string];
}
interface TokenProps {
  font_size: string;
  line_height: string;
}

const NEWS_TITLE_1: TokenProps = {
  font_size: '62px',
  line_height: '100%'
}
const NEWS_TITLE_2: TokenProps = {
  font_size: '50px',
  line_height: '110%'
}
const NEWS_TITLE_3: TokenProps = {
  font_size: '38px',
  line_height: '110%'
}
const NEWS_TITLE_4: TokenProps = {
  font_size: '32px',
  line_height: '100%'
}
const NEWS_TITLE_5: TokenProps = {
  font_size: '24px',
  line_height: '110%'
}
const NEWS_TITLE_6: TokenProps = {
  font_size: '20px',
  line_height: '110%'
}
const NEWS_TITLE_7: TokenProps = {
  font_size: '18px',
  line_height: '100%'
}
const NEWS_TITLE_8: TokenProps = {
  font_size: '16px',
  line_height: '110%'
}

export const NEWS_TITLE_TOKENS = {
  NEWS_TITLE_1,
  NEWS_TITLE_2,
  NEWS_TITLE_3,
  NEWS_TITLE_4,
  NEWS_TITLE_5,
  NEWS_TITLE_6,
  NEWS_TITLE_7,
  NEWS_TITLE_8
}

/**
 * ParseFont function documentation
 * @param mobile Expect a NewsTitle token with font-size values for mobile
 * @param desktop Expect a NewsTitle token with font-size values for desktop
 * @returns Object with font-size and line-height responsive configurations
 */
export function parseResponsiveFont(mobile: TokenProps, desktop: TokenProps): FontProps {
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