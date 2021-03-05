import StoryWrap from '../../StoryWrap';
import { Slider, SliderProps } from '../../..';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { HiOutlineVolumeOff, HiOutlineVolumeUp } from 'react-icons/hi';

export default {
  title: 'Components/Inputs/Slider',
  component: Slider,
  decorators: [
    (Story: any) => (
      <StoryWrap>
        <Story />
      </StoryWrap>
    ),
  ],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
  },
} as Meta;

const Template: Story<SliderProps> = args => (
  <Slider
    {...args}
    LeadingIcon={HiOutlineVolumeOff}
    TrailingIcon={HiOutlineVolumeUp}
    label="Slider"
  />
);

export const _Slider = Template.bind({
  // LeadingIcon: HiOutlineVolumeOff,
  // TrailingIcon: HiOutlineVolumeUp,
  // label: 'Slider',
});
