'use client'

import {useEffect, useState} from 'react'
import TextSearch from "@/app/components/TextSearch";
import InstrumentTable, { testData } from "@/app/market-analysis/components/InstrumentTable";
import {Button} from "@mui/material";
import NavButton from "@/app/components/Button"
import {getAllInstruments, getFilteredInstruments} from "@/app/actions/analysis_execution";
import {ButtonPurpose} from "@/app/utils/ButtonPurpose";
import * as React from "react";

const initialFilters = {
    "Instrument Group" : "",
    "Instrument" : "",
    "Department" : "",
    "Risk Country": "",
    "Exchange": "",
    "Trade Currency": "",
    "Settlement Currency" : ""
}

export default function Page() {
    const [filters, setFilters] = useState(initialFilters)

    const [instrumentDataList, setInstrumentDataList] = useState([])
    const [selectedInstrumentIdList, setSelectedInstrumentIdList] = useState([])

    const handleChange = (e) => {
        const newFilters = {
            ...filters,
            [e.target.name]: e.target.value
        }
        setFilters(newFilters)
        console.log(newFilters)
    }

    const handleCheckboxChange = (id) => {
        const newSelectedInstrumentIdList = selectedInstrumentIdList.includes(id) ?
            [...selectedInstrumentIdList].filter(selectedId => selectedId !== id) :
            [...selectedInstrumentIdList, id]

        const sortedInstrumentDataList = [...instrumentDataList]
            .sort((a, b) => newSelectedInstrumentIdList.includes(b["Id"]) - newSelectedInstrumentIdList.includes(a["Id"]))

        setSelectedInstrumentIdList(newSelectedInstrumentIdList)
        setInstrumentDataList(sortedInstrumentDataList)
    };

    const onSearchClick = async () => {
        try {
            const data = await getFilteredInstruments(filters); // Call the async function

            const rows: InstrumentData[] = data.data.map(item => { return (
                {
                    "Id": item['instrumentId'],
                    "InstrumentGroup": item['instrumentGroup'],
                    "Instrument": item['instrument'],
                    "Department": item['department'],
                    "RiskCountry": item['riskCountry'],
                    "Exchange": item['exchange'],
                    "TradeCCY": item['tradeCCY'],
                    "SettlementCCY": item['settlementCCY'],
                })})
                .sort((a, b) => selectedInstrumentIdList.includes(b["Id"]) - selectedInstrumentIdList.includes(a["Id"]));

            setInstrumentDataList(rows); // Update the state with the response data
            console.log(data.data) // Update the state with the response data
        } catch (error: any) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getAllInstruments(); // Call the async function

                const rows: InstrumentData[] = data.data.map(item => { return (
                {
                    "Id": item['instrumentId'],
                    "InstrumentGroup": item['instrumentGroup'],
                    "Instrument": item['instrument'],
                    "Department": item['department'],
                    "RiskCountry": item['riskCountry'],
                    "Exchange": item['exchange'],
                    "TradeCCY": item['tradeCCY'],
                    "SettlementCCY": item['settlementCCY'],
                })})
                .sort((a, b) => selectedInstrumentIdList.includes(b["Id"]) - selectedInstrumentIdList.includes(a["Id"]));

                setInstrumentDataList(rows); // Update the state with the response data
                console.log(data.data) // Update the state with the response data
            } catch (error: any) {
                console.log(error.message);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="flex flex-col p-10 w-full min-h-full">
            <ul className="grid grid-cols-2 w-full h-min">
                {Object.entries(filters).map((filter, idx) => {
                    const label: string = filter[0]
                    const input: string = filter[1]

                    return (
                        <li key={idx}>
                            <TextSearch label={label} text={input} handleChange={handleChange}/>
                        </li>
                    )
                })}
            </ul>
            <Button onClick={onSearchClick}>
                Search
            </Button>
            <div style={{height: 250}} className="flex mt-10 h-80 border border-gray-300 rounded">
                <InstrumentTable
                    instrumentDataList={instrumentDataList}
                    selectedInstrumentIdList={selectedInstrumentIdList}
                    handleCheckboxChange={handleCheckboxChange}
                />
            </div>
        </div>
    )
}