import StoryWrap from '../StoryWrap';
import { Select, SelectProps } from '../..';
import { Meta, Story } from '@storybook/react';
import React from 'react';

export default {
  title: 'Components/Inputs/Select',
  component: Select,
  decorators: [
    (Story: any) => (
      <StoryWrap>
        <Story />
      </StoryWrap>
    ),
  ],
} as Meta;

const Template: Story<SelectProps> = args => <Select {...args} />;
export const $Select = Template.bind({});
$Select.args = {
  label: 'Select',
  placeholder: 'test',
  options: [
    { value: '', name: '-Select-' },
    { value: 'hello-world', name: 'Hello World' },
    { value: 'hello-world-1', name: 'Hello World' },
    { value: 'hello-world-2', name: 'Hello World' },
    { value: 'disabled', name: 'Disabled', disabled: true },
    { value: 'hello-world-3', name: 'Hello World' },
    { value: 'hello-world-4', name: 'Hello World' },
    { value: 'hello-world-5', name: 'Hello World' },
    { value: 'hello-world-6', name: 'Hello World' },
    { value: 'hello-world-7', name: 'Hello World' },
    { value: 'hello-world-8', name: 'Hello World' },
    { value: 'hello-world-9', name: 'Hello World' },
    { value: 'hello-world-10', name: 'Hello World' },
  ],
};
