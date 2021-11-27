import React from "react";
import "./Banner.css";
import Typewriter from "typewriter-effect";

const Banner = () => {
  return (
    <>
      <div className="banner d-flex justify-content-center align-items-center text-uppercase">
        <div className="food-text text-white">
          <h2 className="fs-1">Order Online Your Food</h2>
          <h3 className="d-flex text-warning fs-1 align-items-center justify-content-center">
            
            <span className="call-desk ms-3 fs-1">
              <a
                className="text-warning"
                style={{ textDecoration: "none" }}
                href="tel:01915523018"
              >
                {
                  <Typewriter
                    options={{
                      strings: ["call us : 01915523018", "Order Now","Fresh Food Everyday"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                }
              </a>
            </span>
          </h3>
        </div>
      </div>
    </>
  );
};

export default Banner;
