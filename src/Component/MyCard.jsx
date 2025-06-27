import React from 'react';
import styled from 'styled-components';
// import myImg from '../Images/about.jpg'
import raees from '../Images/raees.avif'
import Luck from '../Images/Luck3.avif'
import panku from '../Images/panku.avif'
import sj from '../Images/sss.avif'
const MyCard = () => {
    return (
        <>
        <div className="row my-3"></div>
        <h1 className='hlooo'>DEVELOPERS</h1>
        <div className="container">
            <div className="row mt-5">
                <div className="col-sm-3">
                    <StyledWrapper>
                        <div className="card ">
                            <img src={raees} alt="" />
                            <div className="card__content">
                                <p className="card__title">RAEES NAWAB</p>
                                <p className="card__description">MENTOR</p>
                            </div>
                        </div>
                    </StyledWrapper>
                </div>
                <div className="col-sm-3">
                    <StyledWrapper>
                        <div className="card ">
                            <img src={Luck} alt="" />
                            <div className="card__content">
                                <p className="card__title">LUCK</p>
                                <p className="card__description">SENIOR DEVELOPER</p>
                            </div>
                        </div>
                    </StyledWrapper>
                </div>
                <div className="col-sm-3">
                    <StyledWrapper>
                        <div className="card ">
                            <img src={panku} alt="" className='img-fluid' />
                            <div className="card__content">
                                <p className="card__title">PANKAJ CHAUDHARY</p>
                                <p className="card__description">ASSISTANT DEVLOPER</p>
                            </div>
                        </div>
                    </StyledWrapper>
                </div>
                <div className="col-sm-3">
                    <StyledWrapper>
                        <div className="card ">
                            <img src={sj} alt="" className='img-fluid' />
                            <div className="card__content">
                                <p className="card__title">SANU JAIN</p>
                                <p className="card__description">ASSISTANT DEVLOPER</p>
                            </div>
                        </div>
                    </StyledWrapper>
                </div>
            </div>
        </div>
        </>
    );
}

const StyledWrapper = styled.div`
  .card {
    position: relative;
    background-color: #f2f2f2;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    perspective: 1000px;
    box-shadow: 0 0 0 5px #ffffff80;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card img{
    width:100%;
  }

  .card:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
  }

  .card__content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    background-color: #f2f2f2;
    transform: rotateX(-90deg);
    transform-origin: bottom;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card:hover .card__content {
    transform: rotateX(0deg);
  }

  .card__title {
    margin: 0;
    font-size: 24px;
    color: #333;
    font-weight: 700;
  }

  .card:hover svg {
    scale: 0;
  }

  .card__description {
    margin: 10px 0 0;
    font-size: 14px;
    color: #777;
    line-height: 1.4;
  }`;

export default MyCard;
