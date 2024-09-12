import { Meta, StoryFn } from '@storybook/react';
import Header from './index';

export default {
  title: 'Components/Header',
  component: Header,
} as Meta;

const Template: StoryFn<{ title: string }> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Default Header',
};

export const CustomTitle = Template.bind({});
CustomTitle.args = {
  title: 'Custom Header Title',
};
