import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";

import { withThemeByClassName } from "@storybook/addon-styling";

/* TODO: update import to your tailwind styles file */
import "../src/styles/tailwind.css";

const preview: Preview = {
  parameters: {
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
  },

  decorators: [
    // Adds theme switching support.
    // NOTE: requires setting "darkMode" to "class" in your tailwind config
    withThemeByClassName({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
  ],
};

export default preview;
