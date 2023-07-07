import { FaBeer } from "react-icons/fa";
import type { Meta, StoryObj } from '@storybook/react';
import { IconBase } from "react-icons";

const meta: Meta<typeof IconBase> = {
  title: 'Libs/React Icons',
  component: FaBeer,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof IconBase>;

export const Default: Story = {
  args: {}
}

export const AnotherColor: Story = {
  args: {
    color: 'red'
  }
}

export const AnotherSize: Story = {
  args: {
    size: '2em'
  }
}