import StoryWrap from '../StoryWrap';
import {
  DropdownTextField,
  TextField,
  SlowDropdownTextField,
  SlowTextField,
  DropdownTextFieldProps,
  TextFieldProps,
  SlowDropdownTextFieldProps,
  SlowTextFieldProps,
} from '../..';
import { Meta, Story } from '@storybook/react';
import React from 'react';

export default {
  title: 'Components/Text Field',
  component: TextField,
  decorators: [
    (Story: any) => (
      <StoryWrap>
        <Story />
      </StoryWrap>
    ),
  ],
} as Meta;

const Template: Story<TextFieldProps> = args => <TextField {...args} />;
const SlowTemplate: Story<SlowTextFieldProps> = args => (
  <SlowTextField {...args} />
);
const DropdownTemplate: Story<DropdownTextFieldProps> = args => (
  <DropdownTextField {...args} />
);
const SlowDropdownTemplate: Story<SlowDropdownTextFieldProps> = args => (
  <SlowDropdownTextField {...args} />
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
  id: 'dropdown-textField-demo',
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
