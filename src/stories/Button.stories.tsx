import StoryWrap from './StoryWrap';
import { Button } from '..';
import { ButtonProps } from '@/components/Button/Button';
import { Meta, Story } from '@storybook/react';
import React from 'react';

export default {
  title: 'Button',
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
