'use client';
import { dummyLimitsData, testInstrumentsData } from "@/app/utils/test";
import LimitTable from "./components/LimitTable";
import Button from "@/app/components/Button";
import React, { useEffect } from "react";
import SelectedInstrumentsTable from "./components/SelectedInstrumentsTable";
import { getAllLimits } from "@/app/actions/limit_execution";
import { json } from "stream/consumers";
import { ButtonPurpose } from "@/app/utils/ButtonPurpose";

export default function Page({ params }: { params: { slug: string } }) {
    if (!params) {
        return <div>Loading...</div>;
    }

    const [totalRequest, setTotalRequest] = React.useState(0);
    const [limitData, setLimitData] = React.useState<LimitData[]>([]);
    const [totalCount, setTotalCount] = React.useState(0);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getAllLimits(); // Call the async function

                const rows: LimitData[] = data.data.map((item: { [x: string]: any; }) => ({
                    ID: item['id'],
                    Counterparty: item['counterparty'],
                    InstrumentGroup: item['instrumentGroup'],
                    Currency: item['currency'],
                    AvailableLimit: item['availableLimit'],
                    DataDate: item['dataDate']
                }));

                setLimitData(rows); // Update the state with the response data
                console.log(data.data) // Update the state with the response data
            } catch (error: any) {
                console.log(error.message);
            }
        }

        fetchData();
    }, []);

    return (
        <main className="flex min-h-screen w-full flex-col items-center p-10 bg-blue-100">

            <div className="flex flex-row justify-around w-full h-1/5">
                <SelectedInstrumentsTable rows={testInstrumentsData} handleCheckboxChange={() => { }} totalCount={totalCount} setTotalCount={setTotalCount} />
            </div>

            <div className="w-full flex justify-end flex-row items-center">
                <div className="flex flex-row left-0 align-right items-center h-min w-min px-8 py-4 bg-white border border-0.5 rounded-md m-10">
                    <div className="flex flex-row w-min text-nowrap pr-10 text-s">Total Limit Order:</div>
                    <div>{totalCount}</div>
                </div>
                <Button text="Edit Instruments" link={`/market-analysis`} purpose={ButtonPurpose.Ready} />
            </div>

            <div className="flex flex-row justify-around w-full h-min">
                <div className="flex bg-blue-100">
                    <LimitTable rows={limitData} />
                </div>
            </div>
        </main>
    );
}