import React from 'react'
import TipsyBeer from '../Json_data/Beer'
import { useNavigate } from 'react-router-dom';
export default function Beer({AddToCart1}) {

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
                    TipsyBeer.map((data) => (
                        <div className="col-sm-4 text-center my-3">
                      <div className="card p-3 text-light  myCard ">
                                <img height='600px' src={data.Product_image[0].mainImg} alt="" className='card-img-top' />
                                <div className="card-body">
                                    <h3 className='card-heading'>{data.Product_name}</h3>
                                    <h3 className='card-text my-3'>Price : ₹{data.Product_price}</h3>
                                    <h6 className='card-text my-3'>{data.Description}</h6>
                                    <button className='btn btn-warning' onClick={()=>AddToCart1(data)}>Add to cart</button>
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

