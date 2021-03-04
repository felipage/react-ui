import React, { useState } from 'react';
import { useDialog, DialogProvider, Button, AppBar, Content } from '../..';

export default {
  title: 'Examples/Dialogs',
};

export const Dialogs = () => {
  return (
    <DialogProvider>
      <App></App>
    </DialogProvider>
  );
};

const App = () => {
  const { showAlertDialog, showConfirmDialog, showPromptDialog } = useDialog()!;
  const [logMessage, setLogMessage] = useState(
    'Click the buttons to get started'
  );

  const alert = async () => {
    setLogMessage('Showing alert');
    await showAlertDialog({ children: 'This is an alert' });
    setLogMessage('Alert closed');
  };

  const confirm = async () => {
    setLogMessage('Awaiting confirmation');
    const confirm = await showConfirmDialog({
      children: 'This is a confirmation',
    });
    setLogMessage(`Confirmation ${confirm}`);
  };

  const prompt = async () => {
    setLogMessage('Prompting for input');
    const result = await showPromptDialog({
      children: 'This is a prompt',
      initialValue: 'Initial Value',
    });
    setLogMessage(`Got result: ${result}`);
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
        <code className="mt-8">{logMessage}</code>
      </Content>
    </>
  );
};
