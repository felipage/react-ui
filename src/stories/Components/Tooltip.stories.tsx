import StoryWrap from '../StoryWrap';
import {
  Tooltip,
  TooltipProps,
  TooltipContainer,
  TooltipContainerProps,
} from '../..';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { FloatingActionButton } from '../../components';
import { HiOutlinePlus } from 'react-icons/hi';

export default {
  title: 'Components/Tooltip',
  decorators: [
    (Story: any) => (
      <StoryWrap>
        <Story />
      </StoryWrap>
    ),
  ],
} as Meta;

const TooltipTemplate: Story<TooltipProps> = args => <Tooltip {...args} />;
const TooltipContainerTemplate: Story<TooltipContainerProps> = args => (
  <TooltipContainer {...args} />
);

export const $Tooltip = TooltipTemplate.bind({});
$Tooltip.args = {
  label: 'Tooltip',
  children: (
    <FloatingActionButton
      Icon={HiOutlinePlus}
      onClick={() => {}}
      size="normal"
    />
  ),
};

export const $Container = TooltipContainerTemplate.bind({});
$Container.args = {
  children: 'Tooltip',
};
