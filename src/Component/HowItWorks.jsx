import React from 'react';
import GPS from '../Images/Slider/gps-removebg-preview.png'
import Bottle from '../Images/Slider/bottle-removebg-preview.png'
import Bike from '../Images/Slider/bike-removebg-preview.png'
const HowItWorks = () => {
  return (
    <section className="container text-center py-5  mt-5 Work rounded ">
      <h2 className="mb-5">How it works</h2>
      <div className="row">
        {/* Enter Your Address */}
        <div className="col-md-4">
          <img src={GPS} alt="Address Icon" className="mb-3 p-3 rounded dark" width="150" height="150" />
          <h5>Enter your address</h5>
          <p>Once you tell your location, we’ll show you what’s available in your local stores.</p>
        </div>

        {/* Shop Items You Like */}
        <div className="col-md-4">
          <img src={Bottle} alt="Shopping Icon" className="mb-3 p-3 rounded dark" width="150" height="150" />
          <h5>Shop items you like</h5>
          <p>Select your favorite items, compare prices, and shop from multiple stores at once.</p>
          <button className="btn btn-primary">Start Shopping</button>
        </div>

        {/* Get Your Items Delivered */}
        <div className="col-md-4">
          <img src={Bike} alt="Delivery Icon" className="mb-3 p-3 rounded dark" width="150" height="150" />
          <h5>Get your items delivered</h5>
          <p>Store will deliver your order, or you can select to pick up from the store at your convenience.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
