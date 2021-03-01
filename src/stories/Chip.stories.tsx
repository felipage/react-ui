import StoryWrap from './StoryWrap';
import { ChipProps } from '../components/Chip/Chip';
import { Chip } from '..';
import { Meta, Story } from '@storybook/react';
import React from 'react';

export default {
  title: 'Chip',
  component: Chip,
  decorators: [
    (Story: any) => (
      <StoryWrap>
        <Story />
      </StoryWrap>
    ),
  ],
} as Meta;

const Template: Story<ChipProps> = args => <Chip {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Chip',
};
