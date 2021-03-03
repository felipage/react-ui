import StoryWrap from './StoryWrap';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  AlertDialog,
  Button,
  PromptDialog,
  Input,
  ConfirmDialog,
} from '..';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { DialogProps } from '../components/Dialog/Dialog';
import { AlertDialogProps } from '../components/Dialog/AlertDialog';
import { ConfirmDialogProps } from '../components/Dialog/ConfirmDialog';
import { PromptDialogProps } from '../components/Dialog/PromptDialog';

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
const AlertTemplate: Story<AlertDialogProps> = args => (
  <AlertDialog {...args} />
);
const ConfirmTemplate: Story<ConfirmDialogProps> = args => (
  <ConfirmDialog {...args} />
);
const PromptTemplate: Story<PromptDialogProps> = args => (
  <PromptDialog {...args} />
);

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

export const Alert = AlertTemplate.bind({});
Alert.args = {
  open: true,
  children: 'This is an alert!',
};

export const Confirm = ConfirmTemplate.bind({});
Confirm.args = {
  open: true,
  children: 'Confirm???',
};

export const Prompt = PromptTemplate.bind({});
Prompt.args = {
  open: true,
  children: 'Enter some text',
};
