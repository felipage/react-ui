import StoryWrap from '../StoryWrap';
import { ListTile, ListTileProps, IconButton } from '../..';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { FaCloud, FaCloudRain } from 'react-icons/fa';
import { HiPencil } from 'react-icons/hi';

export default {
  title: 'Components/List Tile',
  component: ListTile,
  decorators: [
    (Story: any) => (
      <StoryWrap>
        <Story />
      </StoryWrap>
    ),
  ],
} as Meta;

const Template: Story<ListTileProps> = args => <ListTile {...args} />;

export const $ListTile = Template.bind({});
$ListTile.args = {
  title: 'Weather',
  subtitle:
    'Rainy Rainy Rainy Rainy Rainy Rainy Rainy Rainy Rainy Rainy Rainy Rainy Rainy Rainy Rainy Rainy Rainy Rainy Rainy Rainy Rainy Rainy Rainy Rainy Rainy Rainy Rainy Rainy Rainy Rainy Rainy Rainy Rainy',
  Leading: <FaCloudRain size={24} />,
  Trailing: <IconButton Icon={HiPencil} />,
};
