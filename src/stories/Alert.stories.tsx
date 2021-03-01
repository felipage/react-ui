import { Alert } from '..';
import React from 'react';

export default {
  title: 'Alert',
  component: Alert,
};

export const Default = () => <Alert>Feli Page's React Component Library</Alert>;

export const Red = () => (
  <Alert colour="red">Feli Page's React Component Library</Alert>
);

export const Green = () => (
  <Alert colour="green">Feli Page's React Component Library</Alert>
);
