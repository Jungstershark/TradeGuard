import Link from "next/link";
export default function Page() {

    return (
        <main className="flex min-h-screen w-full flex-col items-center p-10">
            <div className={`w-36 md:w-64 h-max text-center py-2 md:py-4 px-4 rounded rounded-xl shadow-[2px_5px_5px_1px_rgba(0,0,0,0.1)] bg-[#0e234e] text-white`}>
                <Link href="/market-analysis">
                    Select Instrument to Trade
                </Link>
            </div>
        </main>
    );
};

