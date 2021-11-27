import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row, Spinner } from "react-bootstrap";
import Service from "../Service/Service";
import "./Services.css";
import Button from "@restart/ui/esm/Button";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://fathomless-hollows-04747.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        setServices(data);
      });
  }, []);

  return (
    <div className="hwork">
      <Container>
        <div id="services">
          <h2 className="text-black mt-5 text-center text-uppercase">
            Popular Our Food
          </h2>
          <p className="text-center pb-3 fs-5">
            Choose from over 30 craveable toppings to make <br/> your perfect Food.
            Don’t love what you ordered? Let us know. We’re all about second
            chances
          </p>
          <div className="service-container pb-5">
            {
            services.length === 0 ?  <Spinner animation="grow" variant="danger" /> :
            services.map((service) => (
              <Service key={service.id} service={service}></Service>
            ))}
          </div>
        </div>
      </Container>
      <Container style={{backgroundColor:'#f1c40f'}} className="p-5">
        <Row>
          <Col lg={6} sm={12}>
            <div className="get-connected d-flex align-items-center justify-content-center">
              <div className="connect">
              <h2 className="fs-1 text-white pb-4">GET CONNECTED</h2>
            <p className="w-100 text-center">
              Want to send us suggestions for new recipes? <br/> Tell us which of our
              burger is your favorite? <br/>Or just say hi? Get in touch!
            </p>
              </div>
            </div>
          </Col>
          <Col lg={6} sm={12}>
            <div className="from-area">
              <Form>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                  <Form.Label>Address</Form.Label>
                  <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                  <Form.Label>Address 2</Form.Label>
                  <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Select defaultValue="Choose...">
                      <option>Choose...</option>
                      <option>...</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Row>

                <Button className="btn btn-secondary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
