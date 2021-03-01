import { Alert } from '..';
import { storiesOf } from '@storybook/react';
import React from 'react';

const stories = storiesOf('Alert', module);

stories.add('Default', () => {
  return <Alert>Feli Page's React Component Library</Alert>;
});
stories.add('Red', () => {
  return <Alert colour="red">Feli Page's React Component Library</Alert>;
});
stories.add('Green', () => {
  return <Alert colour="green">Feli Page's React Component Library</Alert>;
});
