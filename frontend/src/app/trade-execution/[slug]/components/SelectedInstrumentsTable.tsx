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
    { rows, handleCheckboxChange, totalCount, setTotalCount }:
        {
            rows: InstrumentData[], handleCheckboxChange: formAction, totalCount: number,
            setTotalCount: React.Dispatch<React.SetStateAction<number>>
        }) {

    const [sellStates, setSellStates] = React.useState<{ [key: number]: boolean }>({});
    const [limitOrders, setLimitOrders] = React.useState<{ [key: number]: string }>({});

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
                        <TableCell align="right">Instrument Group</TableCell>
                        <TableCell align="right">Instrument</TableCell>
                        <TableCell align="right">Department</TableCell>
                        <TableCell align="right">Risk Country</TableCell>
                        <TableCell align="right">Exchange</TableCell>
                        <TableCell align="right">Trade Currency</TableCell>
                        <TableCell align="right">Settlement Currency</TableCell>
                        <TableCell align="right">Action</TableCell>
                        <TableCell align="right">Amount</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.Id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="right">{row.InstrumentGroup}</TableCell>
                            <TableCell align="right">{row.Instrument}</TableCell>
                            <TableCell align="right">{row.Department}</TableCell>
                            <TableCell align="right">{row.RiskCountry}</TableCell>
                            <TableCell align="right">{row.Exchange}</TableCell>
                            <TableCell align="right">{row.TradeCCY}</TableCell>
                            <TableCell align="right">{row.SettlementCCY}</TableCell>
                            <TableCell align="right">
                                {/* <button onClick={() => toggleSellStates(row.Id)} className="border" style={{ padding: '10px 20px', cursor: 'pointer' }}>
                                    {sellStates[row.Id] ? 'Sell' : 'Buy'}
                                </button> */}

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
                                <input onChange={(e) => updateLimitOrders(row.Id, e.target.value)} className="border" style={{ padding: '10px 20px', cursor: 'pointer' }} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}