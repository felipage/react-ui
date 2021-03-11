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

export const $Determinate = Template.bind({});
$Determinate.args = {
  label: 'Downloading',
  progress: 0,
};

export const $Indeterminate = Template.bind({});
$Indeterminate.args = {
  label: 'Downloading',
  progress: undefined,
};
