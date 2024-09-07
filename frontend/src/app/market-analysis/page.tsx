'use client'

import { useState } from 'react'
import TextSearch from "@/app/components/TextSearch";
import InstrumentTable, { testData } from "@/app/market-analysis/components/InstrumentTable";

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

    const [data, setData] = useState(testData)

    const handleChange = (e) => {
        const newFilters = {
            ...filters,
            [e.target.name]: e.target.value
        }
        setFilters(newFilters)
        console.log(newFilters)
    }

    const handleCheckboxChange = (id) => {
        const newData = [...data].map(instrumentData => {
            if (instrumentData.Id === id) {
                return {
                    ...instrumentData,
                    IsSelected: !instrumentData.IsSelected
                }
            } else {
                return instrumentData
            }
        })
        console.log(newData)
        setData(newData);
    };

    return (
        <div className="flex flex-col p-10 w-full min-h-full">
            <div>
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
            </div>
            <div className="mt-10">
                <InstrumentTable rows={data} handleCheckboxChange={handleCheckboxChange} />
            </div>
        </div>
    )
}