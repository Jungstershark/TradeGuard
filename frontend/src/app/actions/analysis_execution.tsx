import {EXECUTION_API_PREFIX} from "@/app/constants";

const ANALYSIS_API_PREFIX = 'http://localhost:8080/api/v1';

export async function getAllInstruments() {
    // Validate form fields
    try {
        // Make a GET request to the limits API endpoint
        const response = await fetch(`${ANALYSIS_API_PREFIX}/instruments/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors',
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
        console.error('Database error:', error);
        return { errors: { general: 'An error occurred when getting data. Please try again.' } };
    }
}