'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';

type formAction = (formData: { [key: string]: string }) => Promise<{ errors?: any; success?: boolean; data?: any; }>;

export function AuthForm({ formParams, onSubmit, submitButton }: { formParams: { [key: string]: string }; onSubmit: formAction; submitButton: String }) {
    // State for form input values
    const router = useRouter();

    const departmentConstants = [
        "RE",
        "INFRA",
        "EFM",
        "BMG",
        "ISG",
        "Kepler",
        "FIMA",
        "EMD",
        "EQD",
        "EIS",
        "PE",
        "CEOO",
        "BAR",
        "TPS"
    ]

    const [formData, setFormData] = useState<{ [key: string]: string }>(formParams);
    // console.log(formData);

    // State for managing form submission status and errors
    const [state, setState] = useState<{ pending: boolean; errors: any; success?: boolean; data?: any }>({
        pending: false,
        errors: null,
    });

    // Handle form input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        // console.log(formData);
    };
    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        // console.log(formData);
    };

    // Handle form submission
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setState({ ...state, pending: true });

        try {
            const result = await onSubmit(formData);  // Pass FormData to onSubmit

            if (result.errors) {
                setState({ pending: false, errors: result.errors });  // Handle errors
            } else if (result.success) {
                setState({ pending: false, success: true, data: result.data, errors: null });
                router.push('/market-analysis') // Handle success
            }
        } catch (error) {
            console.error("Error during form submission:", error);
            setState({ pending: false, errors: error });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 border border-gray-300 bg-gray-100 rounded-md h-max overflow-auto">
            {Object.keys(formParams).map((key) => (
                <div key={key} className="mb-4">
                    <label htmlFor={key} className="block text-sm font-medium text-gray-700">
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                    </label>
                    {key === 'department' ?
                        <select
                            id={key}
                            name={key}
                            onChange={handleSelect}
                            className="w-full border border-gray-300 rounded pl-2 py-2.5 focus:outline-none focus:ring-1 focus:ring-gic-blue"
                        >
                            {departmentConstants.map((option, index) => {
                                return <option key={index}>{option}</option>
                            })}
                        </select> :
                        <input
                            id={key}
                            name={key}
                            placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                            value={formData[key]}
                            onChange={handleChange}
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md text-black"
                        />}

                </div>
            ))}

            <button disabled={state.pending} type="submit" className="mt-1 p-2 block w-full border border-gray-300 bg-green-300 rounded-md text-black">
                {submitButton}
            </button>
            {state.success && <p className="text-green-600 mt-2">Sign up successful!</p>}
        </form>

    );
}

