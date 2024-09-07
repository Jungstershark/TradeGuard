'use client'

import { useState } from 'react';
import { signup } from '@/app/actions/auth';

export function SignupForm() {
    // State for form input values
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        role: ''
    });

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
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setState({ ...state, pending: true }); // Set pending to true on form submit

        // Create FormData object from formData state
        const formSubmissionData = new FormData();
        formSubmissionData.append('firstName', formData.firstName);
        formSubmissionData.append('lastName', formData.lastName);
        formSubmissionData.append('email', formData.email);
        formSubmissionData.append('password', formData.password);
        formSubmissionData.append('role', formData.role);

        // Call the signup function and wait for the response
        const result = await signup(formSubmissionData);

        if (result.errors) {
            setState({ pending: false, errors: result.errors }); // Update state with errors
        } else {
            setState({ pending: false, errors: null, success: true, data: result.data }); // Clear errors on successful signup
            // Handle successful signup (e.g., redirect or show success message)
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 border border-gray-300 bg-gray-100 rounded-md">
            <div className="mb-4">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md text-black"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md text-black"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md text-black"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md text-black"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
                <input
                    id="role"
                    name="role"
                    placeholder="Role"
                    value={formData.role}
                    onChange={handleChange}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md text-black"
                />
            </div>

            <SubmitButton state={state} />
            {state.success && <p className="text-green-600 mt-2">Sign up successful!</p>}
        </form>

    );
}

type SubmitButtonProps = {
    state: { pending: boolean; errors: any; success?: boolean; data?: any };
};

function SubmitButton({ state }: SubmitButtonProps) {
    return (
        <button disabled={state.pending} type="submit" className="mt-1 p-2 block w-full border border-gray-300 bg-green-300 rounded-md text-black">
            {state.pending ? 'Signing Up...' : 'Sign Up'}
        </button>
    );
}
