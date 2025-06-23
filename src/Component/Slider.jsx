import React from 'react'
import slider1 from '../Images/Slider/Slider4.jpg'
import slider2 from '../Images/Slider/Slider5.jpg'
import slider3 from '../Images/Slider/Slider6.webp'
import slider4 from '../Images/Slider/slider1.jpg'
export default function Slider() {
    return (

        <div id="demo" class="carousel slide" data-bs-ride="carousel">

            <div class="carousel-indicators">
                <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
            </div>


            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={slider1} alt="Los Angeles" class="d-block w-100" height="780px" />
                </div>
                <div class="carousel-item">
                    <img src={slider2} alt="Chicago" class="d-block w-100" height="780px" />
                </div>
                <div class="carousel-item">
                    <img src={slider3} alt="New York" class="d-block w-100"  height="780px"/>
                </div>
                <div class="carousel-item">
                    <img src={slider4} alt="New York" class="d-block w-100" height="780px" />
                </div>
            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                <span class="carousel-control-next-icon"></span>
            </button>
        </div>
    )
}
