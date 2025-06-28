import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-docs',
    {
      name: 'storybook-addon-sass-postcss',
      options: {
        loadSassAfterPostCSS: true,
      },
    },
  ],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
};
export default config;
