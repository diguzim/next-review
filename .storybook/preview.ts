import type { Preview } from "@storybook/react";
import { withProviders } from "./decorators";

import "@/styles/globals.scss"

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [withProviders]
};

export default preview;
