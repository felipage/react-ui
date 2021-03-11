import { Alert, AlertProps } from '../..';
import { Meta, Story } from '@storybook/react';
import React from 'react';

export default {
  title: 'Components/Alert',
  component: Alert,
} as Meta;

const Template: Story<AlertProps> = args => <Alert {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Feli Page's React Component Library",
  colour: 'default',
  fixed: false,
};
