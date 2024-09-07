import { API_PREFIX } from '../constants';

// this should be in real time; edit to get data using real time api
//return all tables that are in the same instrument group, and have avail_limit>limit
export async function getLimitTable(formData: FormData) {
    // Validate form fields
    const payload = {
        "instrumentGroup": formData.get('firstname'),
        "limit": formData.get('lastName'),
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
            return { errors: errorData.errors || { general: 'Failed to obtain data.' } };
        }

        // Successful signup response
        const data = await response.json();
        return { success: true, data };

    } catch (error) {
        // Handle network or other errors
        console.error('Database filter error:', error);
        return { errors: { general: 'An error occurred when getting data. Please try again.' } };
    }
}


export async function submitTrade(formData: FormData) {
    // Validate form fields
    const payload = {
        "instrumentID": formData.get('instrumentID'),
        "limit": formData.get('limit'),
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
            return { errors: errorData.errors || { general: 'Failed to obtain data.' } };
        }

        // Successful signup response
        const data = await response.json();
        return { success: true, data };

    } catch (error) {
        // Handle network or other errors
        console.error('Database filter error:', error);
        return { errors: { general: 'An error occurred when getting data. Please try again.' } };
    }
}