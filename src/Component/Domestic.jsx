import React from 'react'
import TipsyDesi from '../Json_data/Domestic'
import { useNavigate } from 'react-router-dom';
export default function Domestic({AddToCart3}) {

    const navigate=useNavigate();
  function detail(product){
    // console.log(product);
        navigate("/Details",{state:{product}})
  }
  return (
    <div className='container-fluid bg-kala'>
         <div className="row py-5"></div>
            <div className="row">
                {
                    TipsyDesi.map((data) => (
                        <div className="col-sm-4 text-center my-3">
                            <div className="card p-3 h-100 myCard text-light">
                                <img src={data.Product_image[0].mainImg} alt="" className='card-img-top' height="550px" />
                                <div className="card-body ">
                                    <h3 className='card-heading'>{data.Product_name}</h3>
                                    <h3 className='card-text my-3'>Price : ₹{data.Product_price}</h3>
                                    <h6 className='card-text my-3'>{data.Description}</h6>
                                    <button className='btn btn-warning' onClick={()=>AddToCart3(data)}>Add to cart</button>
                                    <button className='btn btn-primary ms-2' onClick={()=>detail(data)}>Details</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
  )
}
