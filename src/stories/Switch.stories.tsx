import StoryWrap from './StoryWrap';
import { Switch } from '..';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { SwitchProps } from '../components/Switch/Switch';

export default {
  title: 'Switch',
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
