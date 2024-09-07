'use client'

import { useState } from 'react';


type formAction = (formData: FormData) => Promise<{ errors?: any; success?: boolean; data?: any; }>;

export function SignupForm({ formParams, onSubmit, submitButton }: { formParams: { [key: string]: string }; onSubmit: formAction; submitButton: String }) {
    // State for form input values
    const [formData, setFormData] = useState<{ [key: string]: string }>(formParams);
    console.log(formData);

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
        console.log(formData);
    };

    // Handle form submission
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setState({ ...state, pending: true });

        // Create FormData object to send in API request
        const formSubmissionData = new FormData();
        Object.keys(formData).forEach((key) => {
            formSubmissionData.append(key, formData[key]);
        });

        try {
            const result = await onSubmit(formSubmissionData);  // Pass FormData to onSubmit

            if (result.errors) {
                setState({ pending: false, errors: result.errors });  // Handle errors
            } else if (result.success) {
                setState({ pending: false, success: true, data: result.data, errors: null });  // Handle success
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
                    <input
                        id={key}
                        name={key}
                        placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                        value={formData[key]}
                        onChange={handleChange}
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md text-black"
                    />
                </div>
            ))}

            <button disabled={state.pending} type="submit" className="mt-1 p-2 block w-full border border-gray-300 bg-green-300 rounded-md text-black">
                {submitButton}
            </button>
            {state.success && <p className="text-green-600 mt-2">Sign up successful!</p>}
        </form>

    );
}

