import styles from './Table.module.css';

interface DefaultProps {
  children: React.ReactNode;
  className?: string;
}

interface TableProps extends DefaultProps { }
interface TableHeadProps extends DefaultProps { }
interface TableBodyProps extends DefaultProps { }
interface TableRowProps extends DefaultProps { }
interface TableCellProps extends DefaultProps { }

export const Table = ({ children, className }: TableProps) => {
  return (
    <table className={`${styles.table} ${className}`}>
      {children}
    </table>
  );
}

export const TableHead = ({ children, className }: TableHeadProps) => {
  return (
    <thead className={`${styles.tableHead} ${className}`}>
      {children}
    </thead>
  );
}

export const TableBody = ({ children, className }: TableBodyProps) => {
  return (
    <tbody className={`${styles.tableBody} ${className}`}>
      {children}
    </tbody>
  );
}

export const TableRow = ({ children, className }: TableRowProps) => {
  return (
    <tr className={`${styles.tableRow} ${className}`}>
      {children}
    </tr>
  );
}

export const TableCell = ({ children, className }: TableCellProps) => {
  return (
    <td className={`${styles.tableCell} ${className}`}>
      {children}
    </td>
  );
}

const toBeExported = {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
};

export default toBeExported;
