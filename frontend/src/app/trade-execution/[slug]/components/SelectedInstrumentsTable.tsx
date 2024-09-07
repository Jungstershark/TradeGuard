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

type formAction = (id: Number) => void;
export default function SelectedInstrumentsTable({ rows, handleCheckboxChange }: { rows: InstrumentData[], handleCheckboxChange: formAction }) {
    const [isSell, setIsSell] = React.useState(false);

    const toggleButton = () => {
        setIsSell(prevState => !prevState); // Toggle the state
    };
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
                            <TableCell>
                                <Checkbox
                                    key={row.Id}
                                    checked={row.IsSelected}
                                    onChange={() => { handleCheckboxChange(row.Id) }}
                                />
                            </TableCell>
                            <TableCell align="right">{row.InstrumentGroup}</TableCell>
                            <TableCell align="right">{row.Instrument}</TableCell>
                            <TableCell align="right">{row.Department}</TableCell>
                            <TableCell align="right">{row.RiskCountry}</TableCell>
                            <TableCell align="right">{row.Exchange}</TableCell>
                            <TableCell align="right">{row.TradeCCY}</TableCell>
                            <TableCell align="right">{row.SettlementCCY}</TableCell>
                            <TableCell align="right">
                                <button onClick={toggleButton} className="border " style={{ padding: '10px 20px', cursor: 'pointer' }}>
                                    {isSell ? 'Sell' : 'Buy'}
                                </button>
                            </TableCell>
                            <TableCell align="right">{row.SettlementCCY}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}