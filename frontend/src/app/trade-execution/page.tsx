import LimitTable from "./components/LimitTable";
import dummyData from "../utils/test";
export default function Page() {
    return (
      <main className="flex min-h-screen w-full flex-col items-center p-10 bg-green-100">
        <div className = "flex flex-row justify-around w-full h-1/6 bg-red-100">
            <div className = "bg-blue-100">
                instrument group search
            </div>
            <div className = "bg-blue-100">
                counterparty search
            </div>
        </div>
        <div className = "flex flex-row justify-around w-full h-4/6 bg-red-100 mt-10">
            <div className = "bg-blue-100">
                <LimitTable rows = {dummyData} />
            </div>
        </div>
      </main>
    );
  }