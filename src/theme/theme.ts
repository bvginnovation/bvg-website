import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { keyframes, animations } from "./animations";
import { colors } from "./colors";

const config = defineConfig({
  theme: {
    keyframes,
    textStyles: {},
    tokens: {
      animations,
      colors,
    },
  },
});

export const customTheme = createSystem(defaultConfig, config);
