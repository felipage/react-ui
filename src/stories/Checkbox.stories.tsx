import StoryWrap from './StoryWrap';
import { Checkbox } from '..';
import { CheckboxProps } from '@/components/Checkbox/Checkbox';
import { Meta, Story } from '@storybook/react';
import React from 'react';

export default {
  title: 'Checkbox',
  component: Checkbox,
  decorators: [
    (Story: any) => (
      <StoryWrap>
        <Story />
      </StoryWrap>
    ),
  ],
} as Meta;

const Template: Story<CheckboxProps> = args => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'normal',
};
