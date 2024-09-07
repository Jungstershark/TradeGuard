'use client';
import { dummyLimitsData, testInstrumentsData } from "@/app/utils/test";
import LimitTable from "./components/LimitTable";

import React, { useEffect } from "react";
import SelectedInstrumentsTable from "./components/SelectedInstrumentsTable";
import { getAllLimits } from "@/app/actions/limit_execution";
import { json } from "stream/consumers";

export default function Page({ params }: { params: { slug: string } }) {
    if (!params) {
        return <div>Loading...</div>;
    }

    const [totalRequest, setTotalRequest] = React.useState(0);
    const [limitData, setLimitData] = React.useState<LimitData[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getAllLimits(); // Call the async function

                const rows: LimitData[] = data.data.map(item => ({
                    ID: item['id'],
                    Counterparty: item['counterparty'],
                    InstrumentGroup: item['instrumentGroup'],
                    Currency: item['currency'],
                    AvailableLimit: item['availableLimit'],
                    DataDate: item['dataDate']
                }));

                setLimitData(rows); // Update the state with the response data
                // console.log(data.data) // Update the state with the response data
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
                    <LimitTable rows={limitData} />
                </div>
            </div>
        </main>
    );
}