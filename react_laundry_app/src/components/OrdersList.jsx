import React from "react";

const OrderList = ({orders}) => {
  return (
    <table className='table'>
      <thead className='thead-dark'>
        <tr>
          <th scope='col'>Name</th>
          <th scope='col'>Alamat</th>
          <th scope='col'>No Telp</th>
          <th scope='col'>Jenis Laundry</th>
          <th scope='col'>Estimasi Hari</th>
          <th scope='col'>Status</th>
          {/* <th scope='col'>Action</th> */}
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order.id}>
            <td>{order.name}</td>
            <td>{order.alamat}</td>
            <td>{order.nomor_telepon}</td>
            <td>{order.jenis_laundry}</td>
            <td>{order.estimasi_hari}</td>
            <td>{order.status}</td>
            {/* <td>
              <button className='btn btn-primary'>Edit</button>
            </td> */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrderList;
