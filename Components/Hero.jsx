import React from "react";
import shoe from "../public/img/shoe.png";
import amazon from "../public/img/amazon.png";
import flipkart from "../public/img/flipkart.png";

const Hero = () => {
  return (
    <>
      <div className="container py-5">
        <div className="row  justify-content-around align-items-center">
          <div className="col-lg-6">
            <div className="">
              <h1 className="display-2 fw-bold">YOUR FEET DESERVE THE BEST</h1>
              <p>
                YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
                SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH
                OUR SHOES.
              </p>
            </div>
            <div className="">
              <button className="btn btn-danger rounded-0 me-4">
                Shop Now
              </button>
              <button className="btn btn-secondary rounded-0">Category</button>
            </div>
            <div className="social pt-4">
              <p>Availabe On</p>
              <a href="">
                <img src={flipkart} alt="" className="me-3" />
              </a>
              <a href="">
                <img src={amazon} alt="" />
              </a>
            </div>
          </div>
          <div className="col-lg-6 text-end">
            <img src={shoe} className="img-001" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
