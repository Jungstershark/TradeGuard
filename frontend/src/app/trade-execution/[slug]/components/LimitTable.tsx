'use client';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@/app/components/Button';
import TablePagination from '@mui/material/TablePagination';
import { ButtonPurpose } from '@/app/utils/ButtonPurpose';

interface LimitTableProps {
    rows: LimitData[];
}
type Order = 'asc' | 'desc';

export default function LimitTable({ rows }: LimitTableProps) {
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [page, setPage] = React.useState(0);
    const [order, setOrder] = React.useState<Order>('asc');
    const [orderBy, setOrderBy] = React.useState<keyof LimitData>('AvailableLimit');

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };


    function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
        if (b[orderBy] < a[orderBy]) {
            return -1;
        }
        if (b[orderBy] > a[orderBy]) {
            return 1;
        }
        return 0;
    }

    function getComparator<Key extends keyof any>(
        order: Order,
        orderBy: Key,
    ): (
        a: { [key in Key]: number | string },
        b: { [key in Key]: number | string },
    ) => number {
        return order === 'desc'
            ? (a, b) => descendingComparator(a, b, orderBy)
            : (a, b) => -descendingComparator(a, b, orderBy);
    }

    // Ensure that we're not mutating the original rows array
    const visibleRows = React.useMemo(() => {
        return [...rows] // Create a shallow copy to prevent mutation
            .sort(getComparator(order, orderBy)) // Sort the rows
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage); // Paginate the rows
    }, [rows, order, orderBy, page, rowsPerPage]);

    const emptyRows = Math.max(0, (1 + page) * rowsPerPage - rows.length);

    return (
        <Paper>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" className="bold">ID</TableCell>
                            <TableCell align="center" className="bold">Counterparty</TableCell>
                            <TableCell align="center">Instrument Group</TableCell>
                            <TableCell align="center">Currency</TableCell>
                            <TableCell align="center">Available Limit</TableCell>
                            <TableCell align="center">Data Date</TableCell>
                            <TableCell align="center">Trade Button</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {visibleRows.map((row) => (
                            <TableRow
                                key={row.ID}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" align="center">
                                    {row.ID}
                                </TableCell>
                                <TableCell align="center">{row.Counterparty}</TableCell>
                                <TableCell align="center">{row.InstrumentGroup}</TableCell>
                                <TableCell align="center">{row.Currency}</TableCell>
                                <TableCell align="center">{row.AvailableLimit}</TableCell>
                                <TableCell align="center">{row.DataDate}</TableCell>
                                <TableCell align="center">
                                    <Button text="trade" link={`/execution-form/${row.ID}`} purpose={ButtonPurpose.Ready} />
                                </TableCell>
                            </TableRow>
                        ))}
                        {emptyRows > 0 && (
                            <TableRow style={{ height: 53 * emptyRows }}>
                                <TableCell colSpan={6} />
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
