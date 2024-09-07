import {EXECUTION_API_PREFIX} from "@/app/constants";

const ANALYSIS_API_PREFIX = 'http://localhost:8080/api/v1';
const GATEWAY_API_PREFIX = 'http://localhost:8086/api/v1'

export async function getAllInstruments() {
    // Validate form fields
    try {
        const response = await fetch(`${ANALYSIS_API_PREFIX}/instruments`, {
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

export async function getUniqueParams() {
    // Validate form fields
    try {
        const response = await fetch(`${ANALYSIS_API_PREFIX}/instruments/uniqueparams`, {
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

export async function getFilteredInstruments(filters) {
    // console.log(filters)
    try {
        const payload = {};

        if (filters["Instrument Group"]) {
            payload["instrumentGroup"] = filters["Instrument Group"];
        }
        if (filters["Instrument"]) {
            payload["instrument"] = filters["Instrument"];
        }
        if (filters["Department"]) {
            payload["department"] = filters["Department"];
        }
        if (filters["Risk Country"]) {
            payload["riskCountry"] = filters["Risk Country"];
        }
        if (filters["Exchange"]) {
            payload["exchange"] = filters["Exchange"];
        }
        if (filters["Trade Currency"]) {
            payload["tradeCCY"] = filters["Trade Currency"];
        }
        if (filters["Settlement Currency"]) {
            payload["settlementCCY"] = filters["Settlement Currency"];
        }

        // Make a GET request to the limits API endpoint
        const response = await fetch(`${ANALYSIS_API_PREFIX}/instruments/search`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
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

export async function getInstrumentsById(id: string[]) {
    // console.log(filters)
    try {

        const response = await fetch(`${ANALYSIS_API_PREFIX}/instruments/ids`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(id),
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

export async function postApprovalForm(formParams: {}) {
    try {
        const payload = {};

        if (formParams["Instrument Group"]) {
            payload["instrumentGroup"] = formParams["Instrument Group"];
        }
        if (formParams["Instrument"]) {
            payload["instrument"] = formParams["Instrument"];
        }
        if (formParams["Department"]) {
            payload["department"] = formParams["Department"];
        }
        if (formParams["Risk Country"]) {
            payload["riskCountry"] = formParams["Risk Country"];
        }
        if (formParams["Exchange"]) {
            payload["exchange"] = formParams["Exchange"];
        }
        if (formParams["Trade Currency"]) {
            payload["tradeCCY"] = formParams["Trade Currency"];
        }
        if (formParams["Settlement Currency"]) {
            payload["settlementCCY"] = formParams["Settlement Currency"];
        }

        console.log(payload)

        const response = await fetch(`${GATEWAY_API_PREFIX}/records/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
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