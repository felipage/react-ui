import StoryWrap from '../../StoryWrap';
import { Checkbox, CheckboxProps } from '../../..';
import { Meta, Story } from '@storybook/react';
import React from 'react';

export default {
  title: 'Components/Inputs/Checkbox',
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

export const $Checkbox = Template.bind({});
$Checkbox.args = {
  size: 'normal',
};
