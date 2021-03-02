import StoryWrap from './StoryWrap';
import { ProgressBar } from '..';
import { ProgressBarProps } from '@/components/ProgressBar/ProgressBar';
import { Meta, Story } from '@storybook/react';
import React from 'react';

export default {
  title: 'Progress Bar',
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

export const Default = Template.bind({});
Default.args = {
  label: 'Downloading',
};
