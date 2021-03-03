import { Content, ContentProps } from '../..';
import { Meta, Story } from '@storybook/react';
import React from 'react';

export default {
  title: 'Components/Content',
  component: Content,
} as Meta;

const Template: Story<ContentProps> = args => <Content {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <div className="flex items-center justify-center w-full h-32 text-white bg-indigo-600">
      Content
    </div>
  ),
};
