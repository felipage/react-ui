import StoryWrap from './StoryWrap';
import { Button } from '..';
import { storiesOf } from '@storybook/react';
import React from 'react';
const stories = storiesOf('Button', module);

stories.add('Default', () => {
  return (
    <StoryWrap>
      <Button>Button</Button>
    </StoryWrap>
  );
});

stories.add('Red', () => {
  return (
    <StoryWrap>
      <Button colour="red">Delete</Button>
    </StoryWrap>
  );
});
