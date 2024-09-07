import {AiOutlineSearch} from "react-icons/ai";

export default function TextSearch({label, text, handleChange}) {
    return (
        <div className="px-2 py-1 w-full">
            <label className="block text-black text-sm font-medium">
                {label}
            </label>
            <div className="relative">
                <input
                    type="text"
                    name={label}
                    value={text}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded pl-10 pr-4 py-2 focus:outline-none focus:ring-1 focus:ring-gic-blue"
                    placeholder="Enter search here"
                />
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <AiOutlineSearch />
                </span>
            </div>
        </div>
    );
}