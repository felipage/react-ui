import StoryWrap from '../StoryWrap';
import { IconButton, IconButtonProps } from '../..';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { HiOutlinePlus } from 'react-icons/hi';

export default {
  title: 'Components/Icon Button',
  component: IconButton,
  decorators: [
    (Story: any) => (
      <StoryWrap>
        <Story />
      </StoryWrap>
    ),
  ],
} as Meta;

const Template: Story<IconButtonProps> = args => <IconButton {...args} />;

export const $IconButton = Template.bind({});
$IconButton.args = {
  Icon: HiOutlinePlus,
};
