'use client'

import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Page() {
    const [messages, setMessages] = useState<string[]>([]);

    useEffect(() => {
        const eventSource = new EventSource('http://localhost:8087/api/v1/limits/stream')
        
        eventSource.onmessage = (event: MessageEvent) => {
            console.log("EventSource message: ", event.data);
            setMessages((prevMessages) => [event.data]);
        };

        eventSource.onerror = (error: Event) => {
            console.error("EventSource failed: ", error);
            eventSource.close();
        };

        return () => {
            eventSource.close();
        };
    }, []);

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

