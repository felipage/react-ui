import StoryWrap from './StoryWrap';
import { Radio, RadioGroup } from '..';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { RadioProps } from '../components/Radio/Radio';
import { RadioGroupProps } from '../components/Radio/RadioGroup';

export default {
  title: 'Radio',
  // component: Radio,
  decorators: [
    (Story: any) => (
      <StoryWrap>
        <Story />
      </StoryWrap>
    ),
  ],
} as Meta;

const Template: Story<RadioProps> = args => <Radio {...args} />;
const GroupTemplate: Story<RadioGroupProps> = args => <RadioGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  checked: false,
};

export const Group = GroupTemplate.bind({});
Group.args = {
  options: [
    { value: 'option-1', label: 'Option 1' },
    { value: 'option-2', label: 'Option 2' },
    { value: 'option-3', label: 'Option 3' },
  ],
  name: 'radio-group-demo',
  onChange: console.log,
};