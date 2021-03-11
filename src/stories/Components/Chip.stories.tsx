import StoryWrap from '../StoryWrap';
import { Chip, ChipProps } from '../..';
import { Meta, Story } from '@storybook/react';
import React from 'react';

export default {
  title: 'Components/Chip',
  component: Chip,
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

const Template: Story<ChipProps> = args => <Chip {...args} />;

export const $Chip = Template.bind({});
$Chip.args = {
  children: 'Chip',
};
