import StoryWrap from '../StoryWrap';
import { Thumb, ThumbProps } from '../..';
import { Meta, Story } from '@storybook/react';
import React from 'react';

export default {
  title: 'Components/Thumb',
  component: Thumb,
  decorators: [
    (Story: any) => (
      <StoryWrap>
        <Story />
      </StoryWrap>
    ),
  ],
} as Meta;

const Template: Story<ThumbProps> = args => <Thumb {...args} />;

export const $Thumb = Template.bind({});
$Thumb.args = {
  active: false,
};
