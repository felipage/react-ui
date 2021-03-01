import StoryWrap from './StoryWrap';
import { Chip } from '..';
import React from 'react';

export default {
  title: 'Chip',
  component: Chip,
  decorators: [
    (Story: any) => (
      <StoryWrap>
        <Story />
      </StoryWrap>
    ),
  ],
};

export const Default = () => <Chip>Chip</Chip>;
