import StoryWrap from '../StoryWrap';
import { Button, ButtonProps, FlatButton, FlatButtonProps } from '../..';
import { Meta, Story } from '@storybook/react';
import React from 'react';

export default {
  title: 'Components/Button',
  component: Button,
  decorators: [
    (Story: any) => (
      <StoryWrap>
        <Story />
      </StoryWrap>
    ),
  ],
  argTypes: {
    onClick: { action: 'click' },
  },
} as Meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;
const FlatTemplate: Story<FlatButtonProps> = args => <FlatButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
  colour: 'default',
  size: 'normal',
};

export const Flat = FlatTemplate.bind({});
Flat.args = {
  ...Default.args,
  children: 'Delete',
};

export const Red = Template.bind({});
Red.args = {
  ...Default.args,
  children: 'Delete',
  colour: 'red',
};

export const Small = Template.bind({});
Small.args = {
  ...Default.args,
  size: 'small',
};

export const Large = Template.bind({});
Large.args = {
  ...Default.args,
  size: 'large',
};
