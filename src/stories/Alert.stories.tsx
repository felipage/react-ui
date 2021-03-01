import { Alert } from '..';
import { AlertProps } from '@/components/Alert/Alert';
import { Meta, Story } from '@storybook/react';
import React from 'react';

export default {
  title: 'Alert',
  component: Alert,
} as Meta;

const Template: Story<AlertProps> = args => <Alert {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Feli Page's React Component Library",
  colour: 'default',
};

export const Red = Template.bind({});
Red.args = {
  ...Default.args,
  colour: 'red',
};

export const Green = Template.bind({});
Green.args = {
  ...Default.args,
  colour: 'green',
};
