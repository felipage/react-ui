import { Content } from '..';
import React from 'react';

export default {
  title: 'Content',
  component: Content,
};

export const Default = () => (
  <Content>
    <div className="flex items-center justify-center w-full h-32 text-white bg-indigo-600">
      Content
    </div>
  </Content>
);
