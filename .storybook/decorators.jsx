import React from 'react';
import { IconProvider, ThemesProvider } from '../contexts';

export const withProviders = (Story) => {
  return (
    <ThemesProvider>
      <IconProvider>
        <Story />
      </IconProvider>
    </ThemesProvider>
  );
};
