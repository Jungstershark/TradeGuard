'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AiFillHome, AiOutlineHome, AiFillFolder, AiOutlineFolder, AiFillCloud, AiOutlineCloud } from "react-icons/ai";

export default function Sidebar() {
    const pathname = usePathname()
    return (
        <div style={{ backgroundColor: '#0e234e' }} className="w-64 h-screen bg-gicblue text-white flex flex-col">
            <div className="flex justify-center w-full p-2">
                <img src="/gic-logo.png" alt="Transparent Image" className="w-1/2 h-auto"/>
            </div>
            <nav className="flex flex-col space-y-2 p-2">
                <Link
                    href="/"
                    className={"p-2 rounded text-white flex flex-row " + (pathname === "/" ? "bg-black bg-opacity-40" : "hover:bg-black hover:bg-opacity-20")}
                >
                    {pathname === "/" && <AiFillHome style={{ fontSize: '24px' }} />}
                    {pathname !== "/" && <AiOutlineHome style={{ fontSize: '24px' }} />}
                    <text className="pl-2">Home</text>
                </Link>
                <Link
                    href="/page1"
                    className={"p-2 rounded text-white flex flex-row " + (pathname === "/page1" ? "bg-black bg-opacity-40" : "hover:bg-black hover:bg-opacity-20")}
                >
                    {pathname === "/page1" && <AiFillFolder style={{ fontSize: '24px' }} />}
                    {pathname !== "/page1" && <AiOutlineFolder style={{ fontSize: '24px' }} />}
                    <text className="pl-2">Page 1</text>
                </Link>
                <Link
                    href="/page2"
                    className={"p-2 rounded text-white flex flex-row " + (pathname === "/page2" ? "bg-black bg-opacity-40" : "hover:bg-black hover:bg-opacity-20")}
                >
                    {pathname === "/page2" && <AiFillCloud style={{ fontSize: '24px' }} />}
                    {pathname !== "/page2" && <AiOutlineCloud style={{ fontSize: '24px' }} />}
                    <text className="pl-2">Page 2</text>
                </Link>
            </nav>
        </div>
    )
}