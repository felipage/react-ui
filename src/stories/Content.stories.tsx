import { Content } from '..';
import { storiesOf } from '@storybook/react';
import React from 'react';

const stories = storiesOf('Content', module);

stories.add('Default', () => {
  return (
    <Content>
      <div className="flex items-center justify-center w-full h-32 text-white bg-indigo-600">
        Content
      </div>
    </Content>
  );
});
