import { AppBar, AppBarProps, Button } from '../..';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { HiOutlineSparkles } from 'react-icons/hi';

export default {
  title: 'Components/App Bar',
  component: AppBar,
} as Meta;

const Template: Story<AppBarProps> = args => <AppBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  Icon: HiOutlineSparkles,
  title: 'Components/App Bar',
  actions: (
    <>
      <Button size="small">Action #1</Button>
      <Button size="small">Action #2</Button>
    </>
  ),
};

export const SignedOut = Template.bind({});
SignedOut.args = {
  ...Default.args,
  actions: (
    <>
      <Button size="small">Sign In</Button>
      <Button size="small">Sign Up</Button>
    </>
  ),
};

export const SignedIn = Template.bind({});
SignedIn.args = {
  ...Default.args,
  actions: (
    <>
      <Button size="small">Sign Out</Button>
    </>
  ),
};
