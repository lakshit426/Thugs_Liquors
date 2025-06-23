import React, { useEffect, useState } from 'react'
import { Navigate, Outlet,link, useNavigate } from 'react-router-dom';


export default function Cart({ CartData, setCart, Quantitychange }) {

  const [total, setTotal] = useState(0);
  const navigate =useNavigate();
  function add(){
    navigate("/Address_page")
  }
  function del(name) {

    const filterdData = CartData.filter((cartData) => cartData.Product_name != name);

    setCart(filterdData)

  }

  useEffect(() => {
    getTotal();
  })

  function getTotal() {
    var tota = 0;
    CartData.map((mydata)=>tota+=mydata.Product_price*mydata.Product_quantity);
    setTotal(tota);
  }

  return (
    <div className='bhaisaab'>
      <div className="row py-5"></div>
      <div className="row py-3"></div>
      <table className='table table-bordered text-center'>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Image</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Description</th>
          <th>Total</th>
          <th>Delete</th>
        </tr>

        {
          CartData.map((data, index) => (
            <tr className='fw-bold'>
              <td>{index + 1}</td>
              <td>{data.Product_name}</td>
              <td><img src={data.Product_image[0].mainImg} alt="" width="100px" /></td>
              <td>₹{data.Product_price}</td>
              <td className='fs-5 fw-bold'><button className='btn bg-danger text-light me-2' onClick={() => Quantitychange(data, -1)} >-</button>{data.Product_quantity}<button className='btn bg-success text-light ms-2' onClick={() => Quantitychange(data, 1)} >+</button></td>
              <td>{data.Description}</td>
              <td>{data.Product_quantity * data.Product_price}</td>
              <td><button className='btn bg-danger text-light' onClick={() => del(data.Product_name)}>Delete</button></td>
            </tr>
          ))
        }

      </table>
      <div className="row">
        <div className="col-9"></div>
        <div className="col-3">
          <h3>Total :-  {total}</h3>
        </div>
      </div>
      
      <div className="row mt-3">
        <div className="col-9"></div>
        <div className="col-3">
          <button className='btn bg-success text-light' onClick={()=> add()}>Continue</button>
        </div>
      </div>

    </div>
    
  )
}
