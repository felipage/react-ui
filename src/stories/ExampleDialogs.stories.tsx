import React from 'react';
import { useDialog, DialogProvider, Button, AppBar, Content } from '..';

export default {
  title: 'Example/Dialogs',
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
