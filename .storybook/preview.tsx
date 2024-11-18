import React from 'react';
import type { Preview } from '@storybook/react';
import './setting.css';

const preview: Preview = {
  parameters: {
    controls: {
      expended: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
