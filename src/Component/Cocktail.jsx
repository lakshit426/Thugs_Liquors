import React from 'react'
import TipsyCocktail from '../Json_data/Cocktail'

export default function Cocktail({AddToCart4}) {
  return (
    <div className='container-fluid bg-kala'>
         <div className="row py-5"></div>
            <div className="row">
                {
                    TipsyCocktail.map((data) => (
                        <div className="col-sm-4 text-center my-3">
                            <div className="card p-3 h-100 bg-kala text-light ">
                                <img src={data.Product_image} alt="" className='card-img-top' height="550px" />
                                <div className="card-body ">
                                    <h3 className='card-heading'>{data.Product_name}</h3>
                                    <h3 className='card-text my-3'>Price : ₹{data.Product_price}</h3>
                                    <h6 className='card-text my-3'>{data.Description}</h6>
                                    <button className='btn btn-warning' onClick={()=>AddToCart4(data)}>Add to cart</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
  )
}
