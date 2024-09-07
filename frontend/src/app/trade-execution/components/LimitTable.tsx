import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@/app/components/Button';
import { ButtonPurpose } from '@/app/utils/ButtonPurpose';

interface LimitTableProps {
    rows: LimitData[];
}


export default function LimitTable({ rows }: LimitTableProps) {

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="right">Counterparty</TableCell>
                        <TableCell align="right">Instrument Group</TableCell>
                        <TableCell align="right">Currency</TableCell>
                        <TableCell align="right">AvailableLimit</TableCell>
                        <TableCell align="right">DataDate</TableCell>
                        <TableCell align="right">Trade Button</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.Counterparty}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.Counterparty}
                            </TableCell>
                            <TableCell align="right">{row.InstrumentGroup}</TableCell>
                            <TableCell align="right">{row.Currency}</TableCell>
                            <TableCell align="right">{row.AvailableLimit}</TableCell>
                            <TableCell align="right">{row.DataDate}</TableCell>
                            {row.TradeButton? <TableCell align="right">
                                <Button text = "trade" link = "/page1" purpose={ButtonPurpose.Ready} />
                                </TableCell> : null}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}