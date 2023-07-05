import Heading from '@/components/Heading';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Heading> = {
  title: 'components/Heading',
  component: Heading,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: [1, 2, 3, 4, 5, 6],
      },
    },
    children: {
      control: { type: { name: 'ReactNode' }, description: 'Children element' },
    }
  },
};

export default meta;
type Story = StoryObj<typeof Heading>;

const exampleText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'

export const H1: Story = {
  args: {
    size: 1,
    children: exampleText,
  },
};

export const H2: Story = {
  args: {
    size: 2,
    children: exampleText,
  },
};

export const H3: Story = {
  args: {
    size: 3,
    children: exampleText,
  },
};

export const H4: Story = {
  args: {
    size: 4,
    children: exampleText,
  },
};

export const H5: Story = {
  args: {
    size: 5,
    children: exampleText,
  },
};

export const H6: Story = {
  args: {
    size: 6,
    children: exampleText,
  },
};
