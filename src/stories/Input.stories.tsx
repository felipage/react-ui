import StoryWrap from './StoryWrap';
import { Input, SlowInput, DropdownInput, SlowDropdownInput } from '..';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { InputProps } from '@/components/Input/Input';
import { SlowInputProps } from '@/components/Input/SlowInput';
import { DropdownInputProps } from '@/components/Input/DropdownInput';
import { SlowDropdownInputProps } from '@/components/Input/SlowDropdownInput';

export default {
  title: 'Input',
  component: Input,
  decorators: [
    (Story: any) => (
      <StoryWrap>
        <Story />
      </StoryWrap>
    ),
  ],
} as Meta;

const Template: Story<InputProps> = args => <Input {...args} />;
const SlowTemplate: Story<SlowInputProps> = args => <SlowInput {...args} />;
const DropdownTemplate: Story<DropdownInputProps> = args => (
  <DropdownInput {...args} />
);
const SlowDropdownTemplate: Story<SlowDropdownInputProps> = args => (
  <SlowDropdownInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  onChange: value => console.log(value),
  label: 'Label',
  placeholder: 'Placeholder',
};

export const Slow = SlowTemplate.bind({});
Slow.args = {
  ...Default.args,
};

export const Dropdown = DropdownTemplate.bind({});
Dropdown.args = {
  ...Default.args,
  id: 'dropdown-input-demo',
  options: [
    'Option One',
    'Option Two',
    'Option Three',
    'Option Four',
    'Option Five',
    'Option Six',
  ],
};

export const SlowDropdown = SlowDropdownTemplate.bind({});
SlowDropdown.args = {
  ...Dropdown.args,
};
