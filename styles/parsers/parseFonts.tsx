interface FontProps {
  font_size: [string, string];
  line_height: [string, string];
}
interface TokenProps {
  font_size: string;
  line_height: string;
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