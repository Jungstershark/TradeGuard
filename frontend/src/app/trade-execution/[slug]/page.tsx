'use client';
import { dummyLimitsData, testInstrumentsData } from "@/app/utils/test";
import LimitTable from "./components/LimitTable";
import Button from "@/app/components/Button";
import React, { useEffect } from "react";
import SelectedInstrumentsTable from "./components/SelectedInstrumentsTable";
import { getLimitsWithFilter } from "@/app/actions/limit_execution";
import { json } from "stream/consumers";
import { ButtonPurpose } from "@/app/utils/ButtonPurpose";

export default function Page({ params }: { params: { slug: string } }) {
    if (!params) {
        return <div>Loading...</div>;
    }

    // states for the selected instruments
    const [sellStates, setSellStates] = React.useState<{ [key: number]: boolean }>({});
    const [limitOrders, setLimitOrders] = React.useState<{ [key: number]: string }>({});
    const [totalCount, setTotalCount] = React.useState(0);
    const [instrumentGroup, setInstrumentGroup] = React.useState("");

    //states for the limit data
    const [limitData, setLimitData] = React.useState<LimitData[]>([]);

    

    // Fetch the selected instruments data
    useEffect(() => {
        setInstrumentGroup(testInstrumentsData[0].InstrumentGroup);
        // async function fetchSelectedInstruments() {
        //     try {
        //         const data = await getLimitsHigherThanTotal(totalCount); // Call the async function

        //         const rows: LimitData[] = data.data.map((item: { [x: string]: any; }) => ({
        //             ID: item['id'],
        //             Counterparty: item['counterparty'],
        //             InstrumentGroup: item['instrumentGroup'],
        //             Currency: item['currency'],
        //             AvailableLimit: item['availableLimit'],
        //             DataDate: item['dataDate']
        //         }));

        //         setLimitData(rows); // Update the state with the response data
        //     } catch (error: any) {
        //         console.log(error.message);
        //     }
        // }

        // fetchSelectedInstruments();
    }, []);

    // Fetch the limit data
    useEffect(() => {
        async function fetchLimitsData() {
            try {
                const data = await getLimitsWithFilter(totalCount, instrumentGroup); // Call the async function

                const rows: LimitData[] = data.data.map((item: { [x: string]: any; }) => ({
                    ID: item['id'],
                    Counterparty: item['counterparty'],
                    InstrumentGroup: item['instrumentGroup'],
                    Currency: item['currency'],
                    AvailableLimit: item['availableLimit'],
                    DataDate: item['dataDate']
                }));

                setLimitData(rows); // Update the state with the response data
                console.log(data);
            } catch (error: any) {
                console.log(error.message);
            }
        }

        fetchLimitsData();
    }, [instrumentGroup, totalCount]);

    return (
        <main className="flex min-h-screen w-full flex-col items-center p-10 bg-blue-100">

            <div className="flex flex-col justify-around w-full h-1/5">
                <div className="text-lg py-3">
                    Instruments to Trade
                </div>
                <SelectedInstrumentsTable rows={testInstrumentsData} totalCount={totalCount} setTotalCount={setTotalCount} sellStates={sellStates} setSellStates={setSellStates} limitOrders={limitOrders} setLimitOrders={setLimitOrders} />
            </div>

            <div className="w-full flex justify-end flex-row items-center">
                <div className="flex flex-row left-0 align-right items-center h-min w-min px-6 py-4 bg-white border border-0.5 rounded-md m-10">
                    <div className="flex flex-row w-min text-nowrap pr-7 text-s text-gray-700">Total Limit Order:</div>
                    <div>{totalCount}</div>
                </div>
                <Button text="Edit Instruments" link={`/market-analysis`} purpose={ButtonPurpose.Ready} />
            </div>

            <div className="flex flex-col justify-around w-full h-min">
                <div className="text-lg py-3">
                    Submit Limit Order
                </div>
                <div className="flex ">
                    <LimitTable rows={limitData} totalLimitCount={totalCount} />
                </div>
            </div>
        </main>
    );
}