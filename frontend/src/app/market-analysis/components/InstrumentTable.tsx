import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Checkbox} from "@mui/material";
import {useState} from "react";
import TablePagination from "@mui/material/TablePagination";

export const testData: InstrumentData[] = [
    {
        Id: 1,
        InstrumentGroup: 'Equities',
        Instrument: 'AAPL',
        Department: 'Trading',
        RiskCountry: 'USA',
        Exchange: 'NASDAQ',
        TradeCCY: 'USD',
        SettlementCCY: 'USD'
    },
    {
        Id: 2,
        InstrumentGroup: 'Bonds',
        Instrument: 'US10Y',
        Department: 'Fixed Income',
        RiskCountry: 'USA',
        Exchange: 'CBOT',
        TradeCCY: 'USD',
        SettlementCCY: 'USD'
    },
    {
        Id: 3,
        InstrumentGroup: 'Commodities',
        Instrument: 'Gold',
        Department: 'Commodities',
        RiskCountry: 'Global',
        Exchange: 'COMEX',
        TradeCCY: 'USD',
        SettlementCCY: 'USD'
    },
    {
        Id: 4,
        InstrumentGroup: 'Forex',
        Instrument: 'EUR/USD',
        Department: 'FX',
        RiskCountry: 'Eurozone',
        Exchange: 'Forex',
        TradeCCY: 'EUR',
        SettlementCCY: 'USD'
    },
    {
        Id: 5,
        InstrumentGroup: 'Derivatives',
        Instrument: 'S&P 500 Futures',
        Department: 'Derivatives',
        RiskCountry: 'USA',
        Exchange: 'CME',
        TradeCCY: 'USD',
        SettlementCCY: 'USD'
    },
    {
        Id: 6,
        InstrumentGroup: 'Equities',
        Instrument: 'AAPL',
        Department: 'Trading',
        RiskCountry: 'USA',
        Exchange: 'NASDAQ',
        TradeCCY: 'USD',
        SettlementCCY: 'USD'
    },
    {
        Id: 7,
        InstrumentGroup: 'Bonds',
        Instrument: 'US10Y',
        Department: 'Fixed Income',
        RiskCountry: 'USA',
        Exchange: 'CBOT',
        TradeCCY: 'USD',
        SettlementCCY: 'USD'
    },
    {
        Id: 8,
        InstrumentGroup: 'Commodities',
        Instrument: 'Gold',
        Department: 'Commodities',
        RiskCountry: 'Global',
        Exchange: 'COMEX',
        TradeCCY: 'USD',
        SettlementCCY: 'USD'
    },
    {
        Id: 9,
        InstrumentGroup: 'Forex',
        Instrument: 'EUR/USD',
        Department: 'FX',
        RiskCountry: 'Eurozone',
        Exchange: 'Forex',
        TradeCCY: 'EUR',
        SettlementCCY: 'USD'
    },
    {
        Id: 10,
        InstrumentGroup: 'Derivatives',
        Instrument: 'S&P 500 Futures',
        Department: 'Derivatives',
        RiskCountry: 'USA',
        Exchange: 'CME',
        TradeCCY: 'USD',
        SettlementCCY: 'USD'
    }
];

export default function InstrumentTable({ instrumentDataList, selectedInstrumentIdList, handleCheckboxChange }) {
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event: any, newPage: number) => {
        setPage(newPage);
    }

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const paginatedInstrumentDataList = instrumentDataList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="right">Selected</TableCell>
                        <TableCell align="right">Instrument Group</TableCell>
                        <TableCell align="right">Instrument</TableCell>
                        <TableCell align="right">Department</TableCell>
                        <TableCell align="right">Risk Country</TableCell>
                        <TableCell align="right">Exchange</TableCell>
                        <TableCell align="right">Trade Currency</TableCell>
                        <TableCell align="right">Settlement Currency</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {paginatedInstrumentDataList.map((row) => (
                        <TableRow
                            key={row.Id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell>
                                <Checkbox
                                    key={row.Id}
                                    checked={selectedInstrumentIdList.includes(row.Id)}
                                    onChange={() => {handleCheckboxChange(row.Id)}}
                                />
                            </TableCell>
                            <TableCell align="right">{row.InstrumentGroup}</TableCell>
                            <TableCell align="right">{row.Instrument}</TableCell>
                            <TableCell align="right">{row.Department}</TableCell>
                            <TableCell align="right">{row.RiskCountry}</TableCell>
                            <TableCell align="right">{row.Exchange}</TableCell>
                            <TableCell align="right">{row.TradeCCY}</TableCell>
                            <TableCell align="right">{row.SettlementCCY}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={instrumentDataList.length}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </TableContainer>
    );
}