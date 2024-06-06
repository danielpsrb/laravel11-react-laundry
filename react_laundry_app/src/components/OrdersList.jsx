import React from "react";

const OrderList = ({orders}) => {
  return (
    <table className='table'>
      <thead className='thead-dark'>
        <tr>
          <th scope='col'>Name</th>
          <th scope='col'>Alamat</th>
          <th scope='col'>Jenis Laundry</th>
          <th scope='col'>Estimasi Hari</th>
          <th scope='col'>Status</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order.id}>
            <td>{order.name}</td>
            <td>{order.alamat}</td>
            <td>{order.jenis_laundry}</td>
            <td>{order.estimasi_hari}</td>
            <td>{order.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrderList;
