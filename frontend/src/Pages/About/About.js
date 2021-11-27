import React, { component } from "react";
import GoogleMapReact from "google-map-react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold lh-1 mb-3">Order Online</h1>
            <p class="lead">
              Get Free Delivery on Your George Lopez Tacos. Order Now. Order
              George Lopez Tacos for delivery now. Delicious Tacos. Ask
              Questions. Categories: Churro Bites, Chips & Guac.
            </p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-center">
              <button type="button" class="btn btn-warning btn-lg px-2 me-md-2">
              <Nav.Link as={Link} to="/">Food Menu</Nav.Link>
              </button>
              <button type="button" class="btn btn-outline-warning btn-lg px-2">
              <Nav.Link as={Link} to="/weoffer">Location</Nav.Link>
              </button>
            </div>
          </div>
          <div class="col-10 col-sm-8 col-lg-6">
            <img
              src="https://pizzahutbd.com/attached_images/deals/8/Double%20Deal%20-%20OLO%20Banner.jpg"
              class="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div class="bg-dark text-secondary px-4 py-5 text-center">
        <div class="py-5">
          <h1 class="display-5 fw-bold text-white">Find US</h1>
          <div class="col-lg-6 mx-auto">
            <p class="fs-5 mb-4 text-white">
              Would you like millions of new customers to enjoy your amazing
              food and groceries? So would we! It's simple: we list your menu
              and product lists online, help you process orders, pick them up,
              and deliver them to hungry pandas – in a heartbeat! Interested?
              Let's start our partnership today
            </p>
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button
                type="button"
                class="btn btn-outline-info btn-lg px-2 me-sm-3 fw-bold"
              >
                <Nav.Link as={Link} to="/">Food Menu</Nav.Link>
                
              </button>
              <button type="button" class="btn btn-outline-light btn-lg px-2">
              <Nav.Link as={Link} to="/weoffer">Location</Nav.Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
