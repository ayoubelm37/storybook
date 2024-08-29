import { Meta, StoryFn } from '@storybook/react';
import { Example } from './Example';

// Default export for the component
export default {
  title: 'Example',
  component: Example,
} as Meta<typeof Example>;

// Template for creating stories
const Template: StoryFn<typeof Example> = (args) => (
  <Example {...args}>Button</Example>
);

// Define stories using the template
export const Default = Template.bind({});
Default.args = {};

export const Active = Template.bind({});
Active.args = {
  active: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
