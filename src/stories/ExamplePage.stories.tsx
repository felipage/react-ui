import { AppBar, Button, Content } from '..';
import React from 'react';
import { HiOutlineUserCircle as UserIcon } from 'react-icons/hi';

export default {
  title: 'Example',
};

export const Home = () => (
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
      </div>
    </Content>
  </>
);
