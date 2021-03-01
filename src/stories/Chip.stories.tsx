import StoryWrap from './StoryWrap';
import { Chip } from '..';
import { storiesOf } from '@storybook/react';
import React from 'react';
const stories = storiesOf('Chip', module);

stories.add('Default', () => {
  return (
    <StoryWrap>
      <Chip>Chip</Chip>
    </StoryWrap>
  );
});
