import StoryWrap from '../StoryWrap';
import { SnackbarBase, SnackbarBaseProps, FlatButton } from '../..';
import { Meta, Story } from '@storybook/react';
import React from 'react';

export default {
  title: 'Components/Snackbar',
  component: SnackbarBase,
  decorators: [
    (Story: any) => (
      <StoryWrap>
        <Story />
      </StoryWrap>
    ),
  ],
} as Meta;

const Template: Story<SnackbarBaseProps> = args => <SnackbarBase {...args} />;

export const $Snackbar = Template.bind({});
$Snackbar.args = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur auctor ultricies lacus eget porttitor. Sed volutpat libero sed fringilla mollis. Sed eget laoreet urna. Duis in lobortis sem. Aenean et erat non turpis efficitur vulputate. Nulla congue mi quis ipsum fringilla lacinia. Duis varius orci vel diam malesuada congue lacinia et ligula. Nam vitae iaculis sapien. Aliquam rhoncus efficitur tempus.',
  actions: (
    <>
      <FlatButton size="small">Hello</FlatButton>{' '}
    </>
  ),
  show: true,
};
