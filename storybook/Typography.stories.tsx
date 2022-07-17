import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Block } from "../primitives/Block/index";
import { Typography } from "../primitives/Typography/index";
import { ThemeProvider } from "../providers/Theme";
import theme from "../tokens/theme.json";

export default {
  title: "PrensaDS/Typography",
  component: Typography,
} as ComponentMeta<typeof Typography>;

export const Default = () => {
  const variantName = Object.keys(theme.fontSizes)[0] || "";
  return (
    <ThemeProvider>
      <Block>
        <Typography>Default text as p</Typography>
      </Block>
      <Block>
        <Typography as={"h2"}>as H2 title</Typography>
      </Block>

      {variantName && (
        <Block>
          <Typography variant={variantName}>{variantName} variant</Typography>
        </Block>
      )}
    </ThemeProvider>
  );
};

export const Variants = () => {
  return (
    <ThemeProvider>
      {Object.keys(theme.fontSizes).map((name) => (
        <Block key={name}>
          <Typography variant={name}>{name} variant</Typography>
        </Block>
      ))}
    </ThemeProvider>
  );
};

export const FontSize = () => {
  return (
    <ThemeProvider>
      {Object.keys(theme.fontSizes).map((name) => (
        <Block key={name}>
          <Typography fontSize={name}>{name} fontSize</Typography>
        </Block>
      ))}
    </ThemeProvider>
  );
};

export const LineHeight = () => {
  return (
    <ThemeProvider>
      {Object.keys(theme.lineHeights).map((name) => (
        <Block key={name}>
          <Typography lineHeight={name}>{name} lineHeight</Typography>
        </Block>
      ))}
    </ThemeProvider>
  );
};

export const FontWeight = () => {
  return (
    <ThemeProvider>
      {Object.keys(theme.fontWeights).map((name) => (
        <Block key={name}>
          <Typography fontWeight={name}>{name} fontWeight</Typography>
        </Block>
      ))}
    </ThemeProvider>
  );
};
