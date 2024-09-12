import { Meta, StoryFn } from '@storybook/react';
import Layout from './index';

export default {
  title: 'Layout/Layout',
  component: Layout,
} as Meta;

const Template: StoryFn<{
  title: string;
  sidebarItems: { label: string; onClick: () => void }[];
}> = (args) => (
  <Layout {...args}>
    <p>Body</p>
  </Layout>
);

export const Default = Template.bind({});
Default.args = {
  title: 'My Application',
  sidebarItems: [
    { label: 'Home', onClick: () => console.log('Home clicked') },
    { label: 'About', onClick: () => console.log('About clicked') },
    { label: 'Contact', onClick: () => console.log('Contact clicked') },
  ],
};
