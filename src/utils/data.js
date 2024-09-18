import axios from "axios"

// Agents
export const getAgents = async () => null;
export const addAgent = async () => null;

// Real Estates
export const getRealEstates = async () => null;
export const addRealEstate = async () => null;
export const getRealEstateByID = async () => null;
export const deleteRealEstate = async () => null;

// Geo Data
export const getAllCities = async () => {
    try {
        const request = await axios({
            url: `${import.meta.env.VITE_API_ENDPOINT}/cities`,
            headers: {
                Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
            },
        });
        const response = request.data;
        return response;
    } catch (error) {
        console.error("Error fetching cities:", error);
        throw error;
    }
};

export const getAllRegions = async () => {
    try {
        const request = await axios({
            url: `${import.meta.env.VITE_API_ENDPOINT}/regions`,
            headers: {
                Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
            },
        });
        const response = request.data;
        return response;
    } catch (error) {
        console.error("Error fetching regions:", error);
        throw error;
    }
};