import StoryWrap from '../StoryWrap';
import { Button, ButtonProps } from '../..';
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

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
  colour: 'default',
  size: 'normal',
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