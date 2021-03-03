import StoryWrap from '../StoryWrap';
import { DropdownInput, Input, SlowDropdownInput, SlowInput } from '../..';
import { DropdownInputProps } from '@/components/Input/DropdownInput';
import { InputProps } from '@/components/Input/Input';
import { SlowDropdownInputProps } from '@/components/Input/SlowDropdownInput';
import { SlowInputProps } from '@/components/Input/SlowInput';
import { Meta, Story } from '@storybook/react';
import React from 'react';

export default {
  title: 'Components/Input',
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
