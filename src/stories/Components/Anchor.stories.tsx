import StoryWrap from '../StoryWrap';
import { Anchor, AnchorProps } from '../..';
import { Meta, Story } from '@storybook/react';
import React from 'react';

export default {
  title: 'Components/Anchor',
  component: Anchor,
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

const Template: Story<AnchorProps> = args => <Anchor {...args} />;

export const $Anchor = Template.bind({});
$Anchor.args = {
  children: 'Anchor',
  href: 'https://feli.page',
  target: '_blank',
};
