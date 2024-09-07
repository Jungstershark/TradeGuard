import { API_PREFIX } from '../constants';

export async function signup(formData: FormData) {
    // Validate form fields
    const payload = {
        "firstName": formData.get('firstname'),
        "lastName": formData.get('lastName'),
        "email": formData.get('email'),
        "password": formData.get('password'),
        "role": formData.get('role')

    }

    try {
        // Make a POST request to the signup API endpoint
        const response = await fetch(`${API_PREFIX}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors',
            body: JSON.stringify(payload),
            redirect: "follow"
        });

        console.log(response);

        // Check if the response is not OK (status not in the range 200-299)
        if (!response.ok) {
            const errorData = await response.json();
            return { errors: errorData.errors || { general: 'Failed to sign up.' } };
        }

        // Successful signup response
        const data = await response.json();
        return { success: true, data };

    } catch (error) {
        // Handle network or other errors
        console.error('Signup error:', error);
        return { errors: { general: 'An error occurred during signup. Please try again.' } };
    }
}