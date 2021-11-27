import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";


const Service = ({ service }) => {
// const {service} = props;
  const { _id,name,description,img,price } = service;
  return (
    <div className="service p-4 text-start border rounded">
      <img className="text-start pb-4 img-fluid w-100" src={img} alt="" />
      <h3>{name}</h3>
      <p className="py-3">{description}</p>
      <Link to={`/details/${_id}`}>
        <div style={{textDecoration:"none"}} className="text-primary my-4 d-flex justify-content-between align-items-center">
          <p className="text-primary">Price $: {price}</p>
          <div className="learn btn btn-danger">
          Book Now
            </div> 

        </div>
      </Link>
    </div>
  );
};

export default Service;
