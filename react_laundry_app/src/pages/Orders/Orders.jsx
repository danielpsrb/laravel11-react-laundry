// src/pages/Orders.js
import React, {useEffect, useState} from "react";
import {fetchOrders} from "../../api/ordersApi";
import {useAuth} from "../../hooks/useAuth";
import Navbar from "../../components/Navbar";
import OrderList from "../../components/OrdersList";
import "../../pages/Orders/orders.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const {token} = useAuth();

  useEffect(() => {
    const getOrders = async () => {
      if (token) {
        try {
          const ordersData = await fetchOrders(token);
          console.log("Fetched Orders:", ordersData); // Log fetched orders
          setOrders(ordersData);
        } catch (error) {
          console.error("Error fetching orders:", error);
        }
      }
    };

    getOrders();
  }, [token]);

  return (
    <div>
      <Navbar />
      <div className='container'>
        <h1 className='mt-5 mb-4'>Orders</h1>
        <OrderList orders={orders} />
      </div>
    </div>
  );
};

export default Orders;
