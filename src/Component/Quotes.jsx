import React from 'react'
import harry from '../Images/harry-removebg-preview.png'

export default function Quotes() {
  return (
    <div class="container-fluid ">
    <div className="row">
      <div className="col-sm-6 bx p-3">
        <div>
          <span class="fa fa-quote-left icon"></span>
        </div>
        <div>
          <img src="https://www.freepnglogos.com/uploads/simpsons-png/homer-simpson-simpsons-wiki-fandom-powered-wikia-39.png" alt="" class="simsu" />
        </div>
        <div class="blue">
          <h3>Alcohol: because no great story ever started with someone eating a salad.</h3>
{/*           <div class="fa fa-quote-right" id="right"></div> */}
        
        </div>
      </div>
      <div className="col-sm-6 bx p-3">
        <div>
          <span class="fa fa-quote-left icon"></span>
        </div>
        <div>
          <img src={harry} alt="" class="cimsu" />
        </div>
        <div class="blue">
          <h3>A glass of wine a day keeps the doctor away, but a bottle a day brings the doctor to your house.</h3>
{/*           <div class="fa fa-quote-right " id="right"></div> */}
         
        </div>
      </div>
    </div>
  </div>
  )
}
