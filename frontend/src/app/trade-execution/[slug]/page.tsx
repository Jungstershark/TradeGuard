'use client';
import { dummyLimitsData, testInstrumentsData } from "@/app/utils/test";
import LimitTable from "./components/LimitTable";

import React, { useEffect } from "react";
import SelectedInstrumentsTable from "./components/SelectedInstrumentsTable";
import { getAllLimits } from "@/app/actions/limit_execution";

export default function Page({ params }: { params: { slug: string } }) {
    if (!params) {
        return <div>Loading...</div>;
    }

    const [totalRequest, setTotalRequest] = React.useState(0);
    const [limitData, setLimitData] = React.useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getAllLimits(); // Call the async function
                console.log(data) // Update the state with the response data
            } catch (error: any) {
                console.log(error.message); 
            }
        }

        fetchData(); 
    }, []);

    return (
        <main className="flex min-h-screen w-full flex-col items-center p-10 bg-green-100">
            <div className="flex flex-row justify-around w-full h-1/6 bg-red-100">
                <SelectedInstrumentsTable rows={testInstrumentsData} handleCheckboxChange={() => { }} />
            </div>
            <div className="flex flex-row justify-around w-full h-4/6 bg-red-100 mt-10">
                <div className="bg-blue-100">
                    <LimitTable rows={dummyLimitsData} />
                </div>
            </div>
        </main>
    );
}