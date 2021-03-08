import StoryWrap from '../../StoryWrap';
import { Switch, SwitchProps } from '../../..';
import { Meta, Story } from '@storybook/react';
import React from 'react';

export default {
  title: 'Components/Inputs/Switch',
  component: Switch,
  decorators: [
    (Story: any) => (
      <StoryWrap>
        <Story />
      </StoryWrap>
    ),
  ],
} as Meta;

const Template: Story<SwitchProps> = args => <Switch {...args} />;

export const $Switch = Template.bind({});
$Switch.args = {
  label: 'Label',
  checked: false,
};
