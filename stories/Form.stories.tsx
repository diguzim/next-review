import Form from '@/components/Form'
import TextInput from '@/components/TextInput';
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Form> = {
  title: 'Example/Form',
  component: Form,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
    },
    onSubmit: {
      action: 'onSubmit',
    },
    submitText: {
      control: 'text',
    },
    children: {
      control: { type: { name: 'ReactNode' }, description: 'Children element' },
    }
  },
};

export default meta;
type Story = StoryObj<typeof Form>;

export const Default: Story = {
  args: {
    title: 'Form',
    submitText: 'Submit',
    children: (
      <>
        <TextInput label="Name" />
        <TextInput label="Email" />
        <TextInput label="Password" type="password" />
      </>
    ),
  },
};
