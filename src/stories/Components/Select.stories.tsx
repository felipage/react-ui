import StoryWrap from '../StoryWrap';
import { Select, SelectProps } from '../..';
import { Meta, Story } from '@storybook/react';
import React from 'react';

export default {
  title: 'Components/Select',
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
  children: (
    <>
      <option value="" disabled selected></option>
      <option value="hello-world">Hello World</option>
    </>
  ),
};
