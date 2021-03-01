import { AppBar, Button } from '..';
import React from 'react';
import { HiOutlineSparkles } from 'react-icons/hi';

export default {
  title: 'App Bar',
  component: AppBar,
};

export const Default = () => (
  <AppBar
    Icon={HiOutlineSparkles}
    title="App Bar"
    actions={[<Button>Action #1</Button>, <Button>Action #2</Button>]}
  />
);

export const SignedOut = () => (
  <AppBar
    Icon={HiOutlineSparkles}
    title="App Bar"
    actions={[<Button>Sign In</Button>, <Button>Sign Up</Button>]}
  />
);

export const SignedIn = () => (
  <AppBar
    Icon={HiOutlineSparkles}
    title="App Bar"
    actions={[<Button>Sign Out</Button>]}
  />
);
