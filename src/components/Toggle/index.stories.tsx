import { Meta, StoryFn } from '@storybook/react';
import Toggle from './index.tsx';

export default {
  title: 'Components/Toggle',
  component: Toggle,
} as Meta;

const Template: StoryFn<{
  initialChecked: boolean;
  onToggle?: (checked: boolean) => void;
}> = (args) => <Toggle {...args} />;

export const Off = Template.bind({});
Off.args = {
  initialChecked: false,
};

export const On = Template.bind({});
On.args = {
  initialChecked: true,
};

export const WithToggleAction = Template.bind({});
WithToggleAction.args = {
  initialChecked: false,
  onToggle: (checked: boolean) =>
    console.log(`Toggle is now ${checked ? 'ON' : 'OFF'}`),
};
