import { AppBar, Button, Content } from '..';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { HiOutlineUserCircle as UserIcon } from 'react-icons/hi';

const stories = storiesOf('Examples', module);

stories.add('Home', () => {
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
        </div>
      </Content>
    </>
  );
});
