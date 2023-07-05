import { Meta, StoryObj } from "@storybook/react";
import Navbar from "@/components/Navbar";

const meta: Meta<typeof Navbar> = {
  title: 'Components/Navbar',
  component: Navbar,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Example: Story = {
  args: {}
};