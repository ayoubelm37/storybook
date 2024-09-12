import { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Input from './index';

export default {
  title: 'Components/Input',
  component: Input,
} as Meta;

const Template: StoryFn<{
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  type?: string;
}> = (args) => {
  const [inputValue, setInputValue] = useState(args.value);

  return <Input {...args} value={inputValue} onChange={setInputValue} />;
};

export const Default = Template.bind({});
Default.args = {
  value: '',
  placeholder: 'Enter text...',
  label: 'Input Label',
};

export const Password = Template.bind({});
Password.args = {
  value: '',
  placeholder: 'Enter password...',
  type: 'password', // Ensure type is specified here
  label: 'Password',
};
