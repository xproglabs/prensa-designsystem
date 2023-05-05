import { CSS } from "@stitches/react/types";
import { DefaultThemeMap } from "@stitches/react/types/config";
import Stitches from "@stitches/react/types/stitches";
import { PrensaTokens } from "@xprog/prensa-design-tokens/tokens";

export declare const PrensaEngine: Stitches<
  'pds',
  PrensaTokens.MEDIA_QUERIES,
  PrensaTokens.THEME,
  DefaultThemeMap,
  PrensaTokens.UTILS
>;
export declare type PrensaEngineCSS = CSS<typeof PrensaEngine['config']>;
export declare type PrensaEngineTypeof = typeof PrensaEngine;
