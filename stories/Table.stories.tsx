import Table from '@/components/Table';
import type { Meta, StoryObj } from '@storybook/react';
import Link from 'next/link';

const meta: Meta<typeof Table.Table> = {
  title: 'Example/Table',
  component: Table.Table,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: { type: { name: 'ReactNode' }, description: 'Children element' },
    }
  },
};

export default meta;
type Story = StoryObj<typeof Table.Table>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Table.TableHead>
          <Table.TableRow>
            <Table.TableCell>Name</Table.TableCell>
            <Table.TableCell>HP</Table.TableCell>
            <Table.TableCell>Items</Table.TableCell>
          </Table.TableRow>
        </Table.TableHead>
        <Table.TableBody>
          <Table.TableRow>
            <Table.TableCell>
              <Link href="/creatures/1">
                Creature 1
              </Link>
            </Table.TableCell>
            <Table.TableCell>
              100
            </Table.TableCell>
            <Table.TableCell>
              <Link href="/items/1">
                Item 1
              </Link>
            </Table.TableCell>
          </Table.TableRow>
          <Table.TableRow>
            <Table.TableCell>
              <Link href="/creatures/2">
                Creature 2
              </Link>
            </Table.TableCell>
            <Table.TableCell>
              200
            </Table.TableCell>
            <Table.TableCell>
              <Link href="/items/2">
                Item 2
              </Link>
            </Table.TableCell>
          </Table.TableRow>
          <Table.TableRow>
            <Table.TableCell>
              <Link href="/creatures/3">
                Creature 3
              </Link>
            </Table.TableCell>
            <Table.TableCell>
              300
            </Table.TableCell>
            <Table.TableCell>
              <Link href="/items/3">
                Item 3
              </Link>
            </Table.TableCell>
          </Table.TableRow>
          <Table.TableRow>
            <Table.TableCell>
              <Link href="/creatures/4">
                Creature 4
              </Link>
            </Table.TableCell>
            <Table.TableCell>
              400
            </Table.TableCell>
            <Table.TableCell>
              <Link href="/items/4">
                Item 4
              </Link>
            </Table.TableCell>
          </Table.TableRow>
        </Table.TableBody>
      </>
    ),
  },
};
