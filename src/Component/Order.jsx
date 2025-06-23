import React from 'react'
import orderConfirm from '../Images/order/order.gif'
export default function Order() {
  return (
    <div className='container-fluid'>
        <div className="row my-5"></div>
        <div className="row my-5"></div>
        <div className="row">
            <div className="col-sm-12">
                <img src={orderConfirm} alt="" width="100%" height="600px" />
            </div>
        </div>
    </div>
  )
}
