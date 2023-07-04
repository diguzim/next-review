import Table from '@/components/Table';
import { render, screen } from "@testing-library/react";

describe('Table', () => {
  it('finds the expected elements', () => {
    render(
      <Table.Table>
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
              Creature 1
            </Table.TableCell>
            <Table.TableCell>
              100
            </Table.TableCell>
            <Table.TableCell>
              Item 1
            </Table.TableCell>
          </Table.TableRow>
          <Table.TableRow>
            <Table.TableCell>
              Creature 2
            </Table.TableCell>
            <Table.TableCell>
              200
            </Table.TableCell>
            <Table.TableCell>
              Item 2
            </Table.TableCell>
          </Table.TableRow>
        </Table.TableBody>
      </Table.Table>
    );

    const nameTableHeaderElement = screen.getByText('Name');
    expect(nameTableHeaderElement).toBeInTheDocument();

    const hpTableHeaderElement = screen.getByText('HP');
    expect(hpTableHeaderElement).toBeInTheDocument();

    const itemsTableHeaderElement = screen.getByText('Items');
    expect(itemsTableHeaderElement).toBeInTheDocument();

    const creature1NameTableDataElement = screen.getByText('Creature 1');
    expect(creature1NameTableDataElement).toBeInTheDocument();

    const creature1HpTableDataElement = screen.getByText('100');
    expect(creature1HpTableDataElement).toBeInTheDocument();

    const creature1ItemsTableDataElement = screen.getByText('Item 1');
    expect(creature1ItemsTableDataElement).toBeInTheDocument();

    const creature2NameTableDataElement = screen.getByText('Creature 2');
    expect(creature2NameTableDataElement).toBeInTheDocument();

    const creature2HpTableDataElement = screen.getByText('200');
    expect(creature2HpTableDataElement).toBeInTheDocument();

    const creature2ItemsTableDataElement = screen.getByText('Item 2');
    expect(creature2ItemsTableDataElement).toBeInTheDocument();
  });
});
