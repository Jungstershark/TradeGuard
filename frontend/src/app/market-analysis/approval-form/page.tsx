'use client'

import React, {useEffect, useState} from 'react';
import { initialFilters } from "@/app/market-analysis/page";
import { getUniqueParams, postApprovalForm} from "@/app/actions/analysis_execution";
import { useRouter } from 'next/navigation';

const initialOptions = {
    "Instrument Group": [""],
    "Instrument": [""],
    "Department": [""],
    "Risk Country": [""],
    "Exchange": [""],
    "Trade Currency": [""],
    "Settlement Currency": [""]
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
                className="w-full border border-gray-300 rounded pl-2 py-2.5 focus:outline-none focus:ring-1 focus:ring-gic-blue"
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
    const [options, setOptions] = useState(initialOptions)

    const router = useRouter()

    function onOptionSelected(e, param) {

        const newFormParams = {...formParams}
        newFormParams[param] = e.target.value

        setFormParams(newFormParams)
    }

    const onSubmitClick = async () => {
        try {
            postApprovalForm(formParams)
        } catch (error: any) {
            console.log(error.message);
        }

        alert("Approval Form Submitted")
        router.push('/market-analysis')
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getUniqueParams(); // Call the async function
                const uniqueParams = data.data

                const newOptions = {
                    "Instrument Group": ["", ...uniqueParams['instrumentGroup']],
                    "Instrument": ["", ...uniqueParams['instrument']],
                    "Department": ["", ...uniqueParams['department']],
                    "Risk Country": ["", ...uniqueParams['riskCountry']],
                    "Exchange": ["", ...uniqueParams['exchange']],
                    "Trade Currency": ["", ...uniqueParams['tradeCCY']],
                    "Settlement Currency": ["", ...uniqueParams['settlementCCY']],
                }

                setOptions(newOptions); // Update the state with the response data
                console.log(uniqueParams) // Update the state with the response data
            } catch (error: any) {
                console.log(error.message);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="flex flex-col p-10 w-full min-h-full">
            <ul className="grid grid-cols-2 w-full h-min">
                {Object.entries(formParams).map((formParam, idx) => {
                    const param: string = formParam[0]
                    const value: string = formParam[1]

                    return (
                        <li key={idx}>
                            <TextForm label={param} optionsList={options[param]} selectedOption={value}
                                onOptionSelected={(e) => {
                                    onOptionSelected(e, param)
                                }}/>
                        </li>
                    )
                })}
            </ul>
            <div className="flex flex-row-reverse mt-10">
                { !Object.values(formParams).includes("") ? <button
                        className={`w-36 md:w-64 h-max text-center py-2 md:py-4 px-4 rounded rounded-xl shadow-[2px_5px_5px_1px_rgba(0,0,0,0.1)] bg-[#0e234e] text-white cursor-pointer`}
                        onClick={onSubmitClick}
                    >
                        Submit for Approval
                    </button> :
                    <div
                        className={`w-36 md:w-64 h-max text-center py-2 md:py-4 px-4 rounded rounded-xl shadow-[2px_5px_5px_1px_rgba(0,0,0,0.1)] bg-[#0e234e] opacity-50 text-white`}>
                        Submit for Approval
                    </div>
                }
            </div>
        </div>
    )
}