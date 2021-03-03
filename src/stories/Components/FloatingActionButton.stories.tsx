import StoryWrap from '../StoryWrap';
import { FloatingActionButton, FloatingActionButtonProps } from '../..';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { HiOutlinePlus } from 'react-icons/hi';

export default {
  title: 'Components/Floating Action Button',
  component: FloatingActionButton,
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

const Template: Story<FloatingActionButtonProps> = args => (
  <FloatingActionButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  Icon: HiOutlinePlus,
  size: 'normal',
};

export const Small = Template.bind({});
Small.args = {
  ...Default.args,
  size: 'small',
};
