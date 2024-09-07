'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AiFillHome, AiOutlineHome, AiFillFolder, AiOutlineFolder, AiFillCloud, AiOutlineCloud } from "react-icons/ai";

export default function Sidebar() {
    const pathname = usePathname()
    return (
        <div style={{ backgroundColor: '#0e234e' }} className="w-64 min-h-screen text-white flex flex-col">
            <div className="flex justify-center w-full p-2">
                <img src="/gic-logo.png" alt="Transparent Image" className="w-1/2 h-auto"/>
            </div>
            <nav className="flex flex-col space-y-2 p-2">
                <Link
                    href="/"
                    className={"p-2 rounded text-white font-medium flex flex-row " + (pathname === "/" ? "bg-black bg-opacity-40" : "hover:bg-black hover:bg-opacity-20")}
                >
                    {pathname === "/" && <AiFillHome style={{ fontSize: '24px' }} />}
                    {pathname !== "/" && <AiOutlineHome style={{ fontSize: '24px' }} />}
                    <text className="pl-2">Home</text>
                </Link>
                <Link
                    href="/market-analysis"
                    className={"p-2 rounded text-white font-medium flex flex-row " + (pathname === "/market-analysis" ? "bg-black bg-opacity-40" : "hover:bg-black hover:bg-opacity-20")}
                >
                    {pathname === "/market-analysis" && <AiFillFolder style={{ fontSize: '24px' }} />}
                    {pathname !== "/market-analysis" && <AiOutlineFolder style={{ fontSize: '24px' }} />}
                    <text className="pl-2">Market Analysis</text>
                </Link>
                <Link
                    href="/trade-execution"
                    className={"p-2 rounded text-white font-medium flex flex-row " + (pathname === "/trade-execution" ? "bg-black bg-opacity-40" : "hover:bg-black hover:bg-opacity-20")}
                >
                    {pathname === "/trade-execution" && <AiFillCloud style={{ fontSize: '24px' }} />}
                    {pathname !== "/trade-execution" && <AiOutlineCloud style={{ fontSize: '24px' }} />}
                    <text className="pl-2">Execution</text>
                </Link>
            </nav>
        </div>
    )
}