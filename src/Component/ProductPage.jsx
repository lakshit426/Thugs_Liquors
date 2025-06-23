import React, { useState } from "react";
import Whiskey from "../Images/Whiskey/Bluelabel.jpg";
import { useLocation } from "react-router-dom";
import amex from '../Images/payment/amex.jpg'
import paypal from '../Images/payment/paypal.png'
import visa from '../Images/payment/visa.png'
import razorPay from '../Images/payment/razorPay.png'
const ProductPage = () => {

  const locate = useLocation();

  const product = locate.state.product;

  return (
    <div className="container my-5">
      <div className="row my-5"></div>
      <div className="row my-5"></div>
      <div className="row my-5"></div>
      <div className="row">
        {/* Product Image Section */}
        <div className="col-md-6 text-center ">
          <img
            src={product.Product_image[0].mainImg}
            alt="Alpha Blue Whiskey"
            className=" rounded"
            height="400px"
          />
          <div className="row mt-3">
            <div className="col-3">
              <img src={product.Product_image[0].img1} alt="" className="rounded" height="100px" />
            </div>
            <div className="col-3">
              <img src={product.Product_image[0].img2} alt="" className="rounded" height="100px" />
            </div>
            <div className="col-3">
              <img src={product.Product_image[0].img3} alt="" className="rounded" height="100px" />
            </div>
            <div className="col-3">
              <img src={product.Product_image[0].img4} alt="" className="rounded" height="100px" />
            </div>
          </div>
        </div>

        {/* Product Details Section */}
        <div className="col-md-6">
          <h2>{product.Product_name}</h2>
          <p className="text-muted">Spanish Winery</p>

          {/* Price */}
          <div className="mb-3">
            <span className="text-decoration-line-through text-muted me-2"> ₹ 31,999</span>
            <span className="fs-4 fw-bold text-danger"> ₹ {product.Product_price}</span>
          </div>

          {/* Rating */}
          <div className="mb-3 text-warning fs-5">★★★★★</div>

          {/* Description */}
          <p>
            A premium blend whiskey with rich flavors and a smooth finish.
            Perfect for collectors and connoisseurs alike.
          </p>

          {/* Quantity Selector & Buy Now Button */}
          <div className="d-flex align-items-center mb-4">
            <input
              type="number"
              className="form-control me-2"
              min="1"
              style={{ width: "80px" }}
            />
            <button className="btn btn-warning px-4 fw-bold">BUY NOW</button>
          </div>

        

          {/* Safe Checkout Icons */}
          <div className="d-flex align-items-center mt-3">
            <img src={visa} alt="Visa" className="me-2" width="50" />
            <img src={razorPay} className="me-2" width="80" />
            <img src={paypal} alt="PayPal" className="me-2" width="50" />
            <img src={amex} alt="Amex" className="me-2" width="50" />
          </div>

          {/* Customer Support Section */}
          <div className="mt-4 p-3 bg-light rounded">
            <p className="mb-1"><strong>Need Help? Call Us:</strong></p>
            <p className="mb-0">+91 9982476513</p>
            <p className="mb-0">Monday – Friday 9:00 – 17:00</p>
          </div>
        </div>
      </div>
      {/* hello  */}

    </div>
  );
};

export default ProductPage;
