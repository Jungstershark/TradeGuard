import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Checkbox, FormGroup } from "@mui/material";
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

type formAction = (id: Number) => void;
export default function SelectedInstrumentsTable(
    { rows, handleCheckboxChange, totalCount, limitOrders, sellStates, setTotalCount, setLimitOrders, setSellStates }:
        {
            rows: InstrumentData[], handleCheckboxChange: formAction, totalCount: number, limitOrders: { [key: number]: string }, sellStates: { [key: number]: boolean },
            setTotalCount: React.Dispatch<React.SetStateAction<number>>, setLimitOrders: React.Dispatch<React.SetStateAction<{ [key: number]: string }>>, setSellStates: React.Dispatch<React.SetStateAction<{ [key: number]: boolean }>>
        }) {

    const toggleSellStates = (id: number) => {
        setSellStates((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

    const updateLimitOrders = (id: number, value: string) => {
        setLimitOrders((prevLimitOrders) => {
            const updatedOrders = {
                ...prevLimitOrders,
                [id]: value,
            };

            const total = Object.values(updatedOrders).reduce((acc, val) => {
                const num = parseFloat(val);
                return acc + (isNaN(num) ? 0 : num);  // Handle invalid numbers (NaN)
            }, 0);

            setTotalCount(total);  // Set total count to the sum of all limit orders

            return updatedOrders;  // Return the updated limitOrders state
        });
    };

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Instrument Group</TableCell>
                        <TableCell align="center">Instrument</TableCell>
                        <TableCell align="center">Department</TableCell>
                        <TableCell align="center">Risk Country</TableCell>
                        <TableCell align="center">Exchange</TableCell>
                        <TableCell align="center">Trade Currency</TableCell>
                        <TableCell align="center">Settlement Currency</TableCell>
                        <TableCell align="center">Action</TableCell>
                        <TableCell align="center">Amount</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.Id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="center">{row.InstrumentGroup}</TableCell>
                            <TableCell align="center">{row.Instrument}</TableCell>
                            <TableCell align="center">{row.Department}</TableCell>
                            <TableCell align="center">{row.RiskCountry}</TableCell>
                            <TableCell align="center">{row.Exchange}</TableCell>
                            <TableCell align="center">{row.TradeCCY}</TableCell>
                            <TableCell align="center">{row.SettlementCCY}</TableCell>
                            <TableCell align="center">
                                <ToggleButtonGroup
                                    value={sellStates[row.Id] ? 'sell' : 'buy'}
                                    exclusive
                                    aria-label="text alignment"
                                    onChange={() => toggleSellStates(row.Id)}
                                >
                                    <ToggleButton value="buy" aria-label="left aligned">
                                        Buy
                                    </ToggleButton>
                                    <ToggleButton value="sell" aria-label="centered">
                                        Sell
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            </TableCell>
                            <TableCell align="right">
                                <input
                                    onChange={(e) => updateLimitOrders(row.Id, e.target.value)}
                                    value={limitOrders[row.Id] || '0'}
                                    className="border" style={{ padding: '10px 20px', cursor: 'pointer' }} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}