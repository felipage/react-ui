import StoryWrap from '../../StoryWrap';
import { Switch, SwitchProps } from '../../..';
import { Meta, Story } from '@storybook/react';
import React from 'react';

export default {
  title: 'Components/Selection Control/Switch',
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

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  checked: false,
};
