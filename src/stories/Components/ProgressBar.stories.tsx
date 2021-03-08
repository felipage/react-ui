import StoryWrap from '../StoryWrap';
import { ProgressBar, ProgressBarProps } from '../..';
import { Meta, Story } from '@storybook/react';
import React from 'react';

export default {
  title: 'Components/Progress Bar',
  component: ProgressBar,
  decorators: [
    (Story: any) => (
      <StoryWrap>
        <Story />
      </StoryWrap>
    ),
  ],
  argTypes: {
    progress: {
      control: { type: 'range', min: 0, max: 1, step: 0.001 },
    },
  },
} as Meta;

const Template: Story<ProgressBarProps> = args => <ProgressBar {...args} />;

export const $ProgressBar = Template.bind({});
$ProgressBar.args = {
  label: 'Downloading',
};
