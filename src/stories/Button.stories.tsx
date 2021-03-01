import StoryWrap from './StoryWrap';
import { Button } from '..';
import React from 'react';

export default {
  title: 'Button',
  component: Button,
};

export const Default = () => (
  <StoryWrap>
    <Button>Button</Button>
  </StoryWrap>
);

export const Red = () => (
  <StoryWrap>
    <Button colour="red">Delete</Button>
  </StoryWrap>
);
