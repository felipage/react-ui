import React, { useState } from 'react';
import { HiOutlineUserCircle as UserIcon } from 'react-icons/hi';
import {
  AppBar,
  Button,
  Content,
  AlertDialog,
  ConfirmDialog,
  PromptDialog,
} from '..';

export default {
  title: 'Example/Home',
};

export const Home = () => {
  const [usernameDialogOpen, setUsernameDialogOpen] = useState(false);
  const [username, setUsername] = useState('feli.page');
  const [alertMessage, setAlertMessage] = useState('');
  const [alertDialogOpen, setAlertDialogOpen] = useState(false);
  const [confirmMessage, setConfirmMessage] = useState('');
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);

  const onUsernameUpdate = (newUsername: string) => {
    setUsernameDialogOpen(false);
    if (newUsername && newUsername !== '') {
      setUsername(newUsername);
      setAlertMessage('Username updated successfully');
      setAlertDialogOpen(true);
    }
  };

  const deleteAccount = () => {
    setConfirmMessage(
      'Are you sure you want to delete this account?\nThis action cannot be undone'
    );
    setConfirmDialogOpen(true);
  };

  const onConfirmDeleteAccount = (confirm: boolean) => {
    setConfirmDialogOpen(false);
    if (confirm) {
      setAlertMessage('Account Deleted');
      setAlertDialogOpen(true);
    }
  };

  return (
    <>
      <AppBar
        Icon={UserIcon}
        title="App Bar"
        actions={
          <>
            <Button>Log In</Button>
            <Button>Sign Up</Button>
          </>
        }
      />
      <Content>
        <div className="mt-3">
          <h1>Hello World</h1>
          <p>Welcome to feli.page</p>
          <h1>Your Profile</h1>
          <p>Username: {username}</p>
          <Button onClick={() => setUsernameDialogOpen(true)}>
            Update Profile
          </Button>
          <Button onClick={() => deleteAccount()} colour="red">
            Delete Account
          </Button>
        </div>
      </Content>
      <PromptDialog
        title="Update your Profile"
        open={usernameDialogOpen}
        onClose={onUsernameUpdate}
        initialValue={username}
      >
        Your new username
      </PromptDialog>
      <AlertDialog
        open={alertDialogOpen}
        onClose={() => setAlertDialogOpen(false)}
      >
        {alertMessage}
      </AlertDialog>
      <ConfirmDialog open={confirmDialogOpen} onClose={onConfirmDeleteAccount}>
        {confirmMessage}
      </ConfirmDialog>
    </>
  );
};
