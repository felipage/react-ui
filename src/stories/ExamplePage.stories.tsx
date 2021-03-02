import { AppBar, Button, Content } from '..';
import React, { useState } from 'react';
import { HiOutlineUserCircle as UserIcon } from 'react-icons/hi';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Input,
} from '../components';

export default {
  title: 'Example',
};

export const Home = () => {
  const [usernameDialogOpen, setUsernameDialogOpen] = useState(false);
  const [username, setUsername] = useState('felipage');
  const [tempUsername, setTempUsername] = useState('felipage');

  const onCancel = () => {
    setUsernameDialogOpen(false);
    setTempUsername(username);
  };

  const onUpdate = () => {
    setUsernameDialogOpen(false);
    setUsername(tempUsername);
  };

  return (
    <>
      <AppBar
        Icon={UserIcon}
        title="App Bar"
        actions={[<Button>Log In</Button>, <Button>Sign Up</Button>]}
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
        </div>
      </Content>
      <Dialog open={usernameDialogOpen} onClose={() => onCancel()}>
        <DialogTitle>
          <h1>Update your Profile</h1>
        </DialogTitle>
        <DialogContent>
          <Input
            label="Your new username"
            value={tempUsername}
            onChange={setTempUsername}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => onCancel()}>Cancel</Button>
          <Button onClick={() => onUpdate()}>Update</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
