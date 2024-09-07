'use client'

import { useState } from 'react'
import TextSearch from "@/app/components/TextSearch";

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

    const handleChange = (e) => {
        const newFilters = {
            ...filters,
            [e.target.name]: e.target.value
        }
        setFilters(newFilters)
        console.log(newFilters)
    }

    return (
        <>
            <ul className="grid grid-cols-2 w-full h-1">
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
        </>
    )
}