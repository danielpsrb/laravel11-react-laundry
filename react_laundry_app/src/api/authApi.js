import axios from 'axios';
import { API_BASE_URL } from './apiConfig';

// Register a new user
export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/register`, userData);
        return response.data;
    } catch (error) {
        console.error('Failed to register user:', error);
        throw error;
    }
};

// Login an existing user
export const loginUser = async (credentials) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/login`, credentials);
        return response.data;
    } catch (error) {
        console.error('Failed to login user:', error);
        throw error;
    }
};

//logout user
export const logoutUser = async () => {
    try {
        const response = await axios.post(`${API_BASE_URL}/logout`);
        return response.data;
    } catch (error) {
        console.error('Failed to logout user:', error);
        throw error;
    }
};
