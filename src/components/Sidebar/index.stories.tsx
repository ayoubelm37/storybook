import { Meta, StoryFn } from '@storybook/react';
import Sidebar from './index.tsx';

export default {
  title: 'Components/Sidebar',
  component: Sidebar,
} as Meta;

const Template: StoryFn<{ items: { label: string; onClick: () => void }[] }> = (
  args
) => <Sidebar {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { label: 'Home', onClick: () => console.log('Home clicked') },
    { label: 'About', onClick: () => console.log('About clicked') },
    { label: 'Contact', onClick: () => console.log('Contact clicked') },
  ],
};

export const CustomItems = Template.bind({});
CustomItems.args = {
  items: [
    { label: 'Profile', onClick: () => console.log('Profile clicked') },
    { label: 'Settings', onClick: () => console.log('Settings clicked') },
  ],
};
