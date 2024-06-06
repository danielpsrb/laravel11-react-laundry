// src/components/OrderForm.js
import React from "react";

const OrderForm = ({orderData, handleChange, handleSubmit}) => {
  return (
    <form className='d-flex flex-column gap-3 col-6 p-3' onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type='text' name='name' value={orderData.name} onChange={handleChange} />
      </div>
      <div>
        <label>Alamat:</label>
        <input type='text' name='alamat' value={orderData.alamat} onChange={handleChange} />
      </div>
      <div>
        <label>Jenis Laundry:</label>
        <select name='jenis_laundry' value={orderData.jenis_laundry} onChange={handleChange}>
          <option value='cuci_lipat'>Cuci Lipat</option>
          <option value='cuci_setrika'>Cuci Setrika</option>
        </select>
      </div>
      <div>
        <label>Estimasi Hari:</label>
        <select name='estimasi_hari' value={orderData.estimasi_hari} onChange={handleChange}>
          <option value='1'>1 Hari (Express)</option>
          <option value='3'>3 Hari (Reguler)</option>
        </select>
      </div>
      <button type='submit' className='bg-primary text-white'>
        Submit
      </button>
    </form>
  );
};

export default OrderForm;
