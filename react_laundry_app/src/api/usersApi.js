import axios from "axios";
import { API_BASE_URL } from "./apiConfig";

//fetch data users
export const fetchUsers = async (token) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/users/profile`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        });
        // console.log("Response from API:", response.data);
        return response.data;
    } catch (error) {
        console.error("Failed to fetch users:", error);
        throw error;
    }
};