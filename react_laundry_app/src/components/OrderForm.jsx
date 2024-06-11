import React from "react";

const OrderForm = ({ orderData, handleChange, handleSubmit }) => {
  return (
    <form className='d-flex flex-column gap-3 col-6 p-3' onSubmit={handleSubmit}>
      <div>
        <label>Nama:</label>
        <input type='text' className="form-control" name='name' value={orderData.name} onChange={handleChange} />
      </div>
      <div>
        <label>Alamat:</label>
        <input type='text' className="form-control" name='alamat' value={orderData.alamat} onChange={handleChange} />
      </div>
      <div>
        <label>Nomor Telepon:</label>
        <input type='tel' className="form-control" name='nomor_telepon' value={orderData.nomor_telepon} onChange={handleChange} />
      </div>
      <div>
        <label>Jenis Laundry:</label>
        <select name='jenis_laundry' value={orderData.jenis_laundry} onChange={handleChange}>
          <option value='' disabled>Pilih Jenis Laundry</option>
          <option value='Cuci Lipat'>Cuci Lipat</option>
          <option value='Cuci Setrika'>Cuci Setrika</option>
        </select>
      </div>
      <div>
        <label>Estimasi Hari:</label>
        <select name='estimasi_hari' value={orderData.estimasi_hari} onChange={handleChange}>
          <option value='' disabled>Pilih Estimasi Hari</option>
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
