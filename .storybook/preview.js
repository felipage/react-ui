import '../src/styles/main.css';
import '@storybook/addon-console';
import StoryBackgroundWrap from '../src/stories/StoryBackgroundWrap';
import { themes } from '@storybook/theming';

const myCommonThemes = {
  appBorderRadius: 8,
  colorPrimary: '#f9a828',
  brandTitle: 'Feli Page UI\nStorybook',
  brandUrl: 'https://feli.page/',
};

const myThemes = {
  light: {
    ...myCommonThemes,
    appBg: '#feeed6',
  },
  dark: {
    ...myCommonThemes,
  },
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
  darkMode: {
    darkClass: 'dark',
    lightClass: 'light',
    stylePreview: true,
    dark: {
      ...themes.dark,
      ...myThemes.dark,
    },
    light: {
      ...themes.light,
      ...myThemes.light,
    },
  },
};

export const decorators = [
  Story => (
    <StoryBackgroundWrap>
      <Story />
    </StoryBackgroundWrap>
  ),
];
