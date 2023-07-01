import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";

import { withThemeByClassName } from "@storybook/addon-styling";
import { withPerformance } from "storybook-addon-performance";

/* TODO: update import to your tailwind styles file */
import "../src/app/globals.css";

export const decorator = [
  withThemeByClassName({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "dark",
  }),
  withPerformance,
];

export const argTypes = {
  children: {
    table: {
      disable: true,
    },
  },
};

export const parameters = {
  darkmode: {
    // Override the default dark theme
    dark: { ...themes.dark, appBg: "black" },
    // Override the default light theme
    light: { ...themes.normal, appBg: "red" },
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
