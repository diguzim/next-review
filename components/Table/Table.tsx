import styles from './Table.module.css';

interface TableProps {
  children: React.ReactNode;
}

interface TableHeadProps {
  children: React.ReactNode;
}

interface TableBodyProps {
  children: React.ReactNode;
}

interface TableRowProps {
  children: React.ReactNode;
}

interface TableCellProps {
  children: React.ReactNode;
}

const Table = ({ children }: TableProps) => {
  return (
    <table className={styles.table}>
      {children}
    </table>
  );
}

const TableHead = ({ children }: TableHeadProps) => {
  return (
    <thead className={styles.tableHead}>
      {children}
    </thead>
  );
}

const TableBody = ({ children }: TableBodyProps) => {
  return (
    <tbody className={styles.tableBody}>
      {children}
    </tbody>
  );
}

const TableRow = ({ children }: TableRowProps) => {
  return (
    <tr className={styles.tableRow}>
      {children}
    </tr>
  );
}

const TableCell = ({ children }: TableCellProps) => {
  return (
    <td className={styles.tableCell}>
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
