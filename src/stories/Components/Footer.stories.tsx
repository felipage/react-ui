import StoryWrap from '../StoryWrap';
import { Footer, FooterProps, FooterGroup, FooterLink } from '../..';
import { Meta, Story } from '@storybook/react';
import React from 'react';

export default {
  title: 'Components/Footer',
  component: Footer,
  decorators: [
    (Story: any) => (
      <StoryWrap>
        <Story />
      </StoryWrap>
    ),
  ],
} as Meta;

const Template: Story<FooterProps> = args => <Footer {...args} />;

export const $Footer = Template.bind({});
$Footer.args = {
  children: (
    <>
      <FooterGroup label="Yo 1">
        <FooterLink>Hello Yo 1</FooterLink>
        <FooterLink>Hello Yo 2</FooterLink>
        <FooterLink>Hello Yo 3</FooterLink>
      </FooterGroup>
      <FooterGroup label="Yo 2">
        <FooterLink>Hello Yo 1</FooterLink>
        <FooterLink>Hello Yo 2</FooterLink>
        <FooterLink>Hello Yo 3</FooterLink>
      </FooterGroup>
      <FooterGroup label="Yo 3">
        <FooterLink>Hello Yo 1</FooterLink>
        <FooterLink>Hello Yo 2</FooterLink>
        <FooterLink>Hello Yo 3</FooterLink>
      </FooterGroup>
    </>
  ),
};
