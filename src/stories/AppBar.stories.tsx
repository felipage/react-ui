import { AppBar, Button } from '..';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { HiOutlineSparkles } from 'react-icons/hi';

const stories = storiesOf('App Bar', module);

stories.add('Default', () => {
  return (
    <AppBar
      Icon={HiOutlineSparkles}
      title="App Bar"
      actions={[<Button>Action #1</Button>, <Button>Action #2</Button>]}
    />
  );
});

stories.add('Signed Out', () => {
  return (
    <AppBar
      Icon={HiOutlineSparkles}
      title="App Bar"
      actions={[<Button>Sign In</Button>, <Button>Sign Up</Button>]}
    />
  );
});
stories.add('Signed In', () => {
  return (
    <AppBar
      Icon={HiOutlineSparkles}
      title="App Bar"
      actions={[<Button>Sign Out</Button>]}
    />
  );
});
