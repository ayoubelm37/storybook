import { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Select from './index.tsx';

export default {
  title: 'Components/Select',
  component: Select,
} as Meta;

const Template: StoryFn<any> = (args) => {
  const [selectedValue, setSelectedValue] = useState(args.value);

  return <Select {...args} value={selectedValue} onChange={setSelectedValue} />;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Select an option',
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ],
  value: 'option1',
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ],
  value: 'option2',
};
