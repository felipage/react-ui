import '../src/styles/main.css';
import '@storybook/addon-console';
import StoryBackgroundWrap from '../src/stories/StoryBackgroundWrap';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
};

export const decorators = [
  Story => (
    <StoryBackgroundWrap>
      <Story />
    </StoryBackgroundWrap>
  ),
];
