'use client'

import React, { useState } from 'react';
import TextSearch from "@/app/components/TextSearch";
import { initialFilters } from "@/app/market-analysis/page";

const dummyOptions = {
    "Instrument Group": ["", "Equity", "Bond", "Derivative", "Commodity"],
    "Instrument": ["", "Stock", "Bond", "Option", "Future", "ETF"],
    "Department": ["", "Trading", "Risk Management", "Compliance", "Operations"],
    "Risk Country": ["", "USA", "Germany", "China", "India", "Brazil"],
    "Exchange": ["", "NYSE", "NASDAQ", "LSE", "TSE", "HKEX"],
    "Trade Currency": ["", "USD", "EUR", "JPY", "GBP", "AUD"],
    "Settlement Currency": ["", "USD", "EUR", "JPY", "GBP", "CHF"]
};

function TextForm({label, optionsList, selectedOption, onOptionSelected}:{label: string, optionsList: string[], selectedOption: string, onOptionSelected: any}) {
    return (
        <div className="px-2 py-1 w-full">
            <label className="block text-black text-sm font-medium">
                {label}
            </label>
            <select
                id="dropdown"
                value={selectedOption}
                onChange={onOptionSelected}
                className="w-full border border-gray-300 rounded pl-2 py-2 focus:outline-none focus:ring-1 focus:ring-gic-blue"
            >
                {optionsList.map((option, index) => {
                    return <option key={index}>{option}</option>
                })}
            </select>
        </div>
    );
}

export default function Page() {
    const [formParams, setFormParams] = useState(initialFilters)

    function onOptionSelected(e, param) {

        const newFormParams = {...formParams}
        newFormParams[param] = e.target.value

        // console.log(param, e.target.value, newFormParams)
        setFormParams(newFormParams)
    }

    return (
        <div className="flex flex-col p-10 w-full min-h-full">
            <ul className="grid grid-cols-2 w-full h-min">
                {Object.entries(formParams).map((formParam, idx) => {
                    const param: string = formParam[0]
                    const value: string = formParam[1]

                    return (
                        <li key={idx}>
                            <TextForm label={param} optionsList={dummyOptions[param]} selectedOption={value} onOptionSelected={(e) => {onOptionSelected(e, param)}}/>
                        </li>
                    )
                })}
            </ul>
        </div>
)
}