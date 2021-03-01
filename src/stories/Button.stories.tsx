import StoryWrap from './StoryWrap';
import { Button } from '..';
import React from 'react';

export default {
  title: 'Button',
  component: Button,
  decorators: [
    (Story: any) => (
      <StoryWrap>
        <Story />
      </StoryWrap>
    ),
  ],
};

export const Default = () => <Button>Button</Button>;

export const Red = () => <Button colour="red">Delete</Button>;
