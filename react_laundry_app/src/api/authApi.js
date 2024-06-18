import axios from 'axios';
import { API_BASE_URL } from './apiConfig';


export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/register`, userData);
        return response.data;
    } catch (error) {
        console.error('Failed to register user:', error);
        throw error;
    }
};

export const loginUser = async (credentials) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/login`, credentials);
        localStorage.setItem('token', response.data.token); // Simpan token ke local storage
        return response.data;
    } catch (error) {
        console.error('Failed to login user:', error);
        throw error;
    }
};

export const logoutUser = async () => {
    try {
        const token = localStorage.getItem("token");
        if(!token) throw new Error("No token found");

        const response = await axios.post(`${API_BASE_URL}/logout`, {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        localStorage.removeItem('token');
        localStorage.removeItem("usersData");
        return response.data;
    } catch (error) {
        console.error('Failed to logout user:', error);
        throw error;
    }
};
