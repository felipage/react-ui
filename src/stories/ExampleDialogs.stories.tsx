import React from 'react';
import Button from '../components/Button/Button';
import { useDialog, DialogProvider } from '..';
import AppBar from '../components/AppBar/AppBar';
import { Content } from '../components';

export default {
  title: 'Examples/Dialogs',
};

export const Default = () => {
  return (
    <DialogProvider>
      <App></App>
    </DialogProvider>
  );
};

const App = () => {
  const { showAlertDialog, showConfirmDialog, showPromptDialog } = useDialog();

  const alert = async () => {
    await showAlertDialog({ children: 'This is an alert' });
  };

  const confirm = async () => {
    await showConfirmDialog({ children: 'This is a confirmation' });
  };

  const prompt = async () => {
    await showPromptDialog({ children: 'This is a prompt' });
  };

  return (
    <>
      <AppBar title="Dialogs"></AppBar>
      <Content>
        <div className="flex gap-2 mt-4">
          <Button onClick={alert}>Alert</Button>
          <Button onClick={confirm}>Confirm</Button>
          <Button onClick={prompt}>Prompt</Button>
        </div>
      </Content>
    </>
  );
};
