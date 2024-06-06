// src/api/orderApi.js
import axios from "axios";
import {API_BASE_URL} from "./apiConfig";

// Fetch orders
export const fetchOrders = async (token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/orders`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("Response from API:", response.data); // Log response data
    return response.data;
  } catch (error) {
    console.error("Failed to fetch orders:", error);
    throw error;
  }
};

// Create a new order
export const createOrder = async (orderData, token) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/orders`, orderData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Failed to create order:", error);
    throw error;
  }
};
