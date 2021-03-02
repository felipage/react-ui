import StoryWrap from './StoryWrap';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Input,
} from '..';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { DialogProps } from '../components/Dialog/Dialog';

export default {
  title: 'Dialog',
  component: Dialog,
  decorators: [
    (Story: any) => (
      <StoryWrap>
        <Story />
      </StoryWrap>
    ),
  ],
} as Meta;

const Template: Story<DialogProps> = args => <Dialog {...args} />;

export const Default = Template.bind({});
Default.args = {
  open: true,
  children: (
    <>
      <DialogTitle>
        <h1>Dialog Title</h1>
      </DialogTitle>
      <DialogContent>
        <Input label="Name" />
      </DialogContent>
      <DialogActions>
        <Button>Cancel</Button>
        <Button>Submit</Button>
      </DialogActions>
    </>
  ),
};
