// src/pages/Orders.js
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {createOrder} from "../../api/ordersApi";
import {useAuth} from "../../hooks/useAuth";
import Navbar from "../../components/Navbar";
import OrderForm from "../../components/OrderForm";
import "../../pages/NewOrder/newOrder.css";

const NewOrder = () => {
  const [orderData, setOrderData] = useState({
    name: "",
    alamat: "",
    jenis_laundry: "",
    estimasi_hari: "",
    status: "pending",
  });
  const {token} = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setOrderData({...orderData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createOrder(orderData, token);
      alert("Order created successfully");
      navigate("/orders");
    } catch (error) {
      console.error("Error creating order:", error);
      alert("Failed to create order");
    }
  };

  return (
    <div>
      <Navbar />
      <div className='container d-flex flex-column align-items-center '>
        <h1 className='mt-5 mb-4 '>New Order</h1>
        <OrderForm orderData={orderData} handleChange={handleChange} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default NewOrder;
