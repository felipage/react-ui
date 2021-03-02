import '../src/styles/main.css';
import '@storybook/addon-console';
import StoryBackgroundWrap from '../src/stories/StoryBackgroundWrap';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
  darkMode: {
    darkClass: 'dark',
    lightClass: 'light',
    stylePreview: true,
  },
};

export const decorators = [
  Story => (
    <StoryBackgroundWrap>
      <Story />
    </StoryBackgroundWrap>
  ),
];
