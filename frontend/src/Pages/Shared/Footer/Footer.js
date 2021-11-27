import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React from "react";
import "./Footer.css";
import { FaFacebook,FaTwitter,FaYoutube,FaInstagram} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer p-5">
      <Container>
        <Row>
          <Col xs={12} md={5}>
            <div className="text-star">
              <p className="text-start">
              <img class="img-fluid" src="https://i.ibb.co/Y28J1Kf/logo.png" alt="" />
              </p>
              <p className="text-start">
              Want to send us suggestions for new recipes? Tell us which of our burger is your favorite? Or just say hi? Get in touch!
              </p>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <h4 className="text-start text-warning">Quick Links</h4>
            <div className="newslater">
              <h6 className="text-start">Newsletter</h6>
              <Form>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Button
                    className="w-25 bg-warning text-black"
                    type="submit"
                  >
                    Submit
                  </Button>
                </Row>
              </Form>
            </div>
          </Col>

          <Col xs={12} md={3}>
            <h4 className="text-start text-warning">Our Location</h4>
            <ul className="text-start usefull-link social">
              <li>234 Main Street, Uni 01, New Mexico City</li>
              <li>Mon - Fri: 08:00 am - 10:00 pm</li>
              <li>Sat - Sun: 10:00 am - 11:00 pm</li>
              <li>+01 (234) 56 56 789</li>
            </ul>
          </Col>
         
        </Row>
      </Container>
      <Container>
          <Row>
              <div className="d-flex justify-content-between align-items-center f-bottom">
                <div className="copy-info">
                  <h6>All Right Reserved Develope By <a href="https://github.com/siam786">SIAM</a></h6>
                </div>
                <div className="text-end py-5">
              &copy; 2021 <strong>Crave - Ordering</strong>
              </div>
              </div>
          </Row>
      </Container>
    </div>
  );
};

export default Footer;
