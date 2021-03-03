import StoryWrap from '../StoryWrap';
import { Underlay, UnderlayProps } from '../..';
import { Meta, Story } from '@storybook/react';
import React from 'react';

export default {
  title: 'Components/Underlay',
  component: Underlay,
  decorators: [
    (Story: any) => (
      <StoryWrap>
        <Story />
      </StoryWrap>
    ),
  ],
} as Meta;

const Template: Story<UnderlayProps> = args => <Underlay {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'normal',
};
