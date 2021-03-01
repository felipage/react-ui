import { Content } from '..';
import { ContentProps } from '@/components/Content/Content';
import { Meta, Story } from '@storybook/react';
import React from 'react';

export default {
  title: 'Content',
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
