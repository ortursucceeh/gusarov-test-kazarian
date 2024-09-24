import type { Preview } from "@storybook/react";

import "./../src/styles/index.css";
import "./../src/styles/normalize.css";
import "./../src/styles/variables.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "dark",
      values: [
        {
          name: "dark",
          value: "#1A1A1E",
        },
      ],
    },
  },
};

export default preview;
