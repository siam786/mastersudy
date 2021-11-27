import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import { Card, Container, Nav, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  /*   const {name,description,image} = details; */

  useEffect(() => {
    const url = `https://fathomless-hollows-04747.herokuapp.com/services/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, [id]);
  return (
    <div className="py-5">
      <Container>
        <Row>
          <div className="col-md-6 border border-primary rounded">
            <Card>
              <Card.Img variant="top" src={details?.img} />
              <Card.Body>
                <Card.Title>{details?.name}</Card.Title>
                <Card.Text>{details?.description}</Card.Text>
                <Button className="btn btn-warning" variant="primary">
                  <Nav.Link as={Link} to="/home">See Menu</Nav.Link>
                  </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-6 border border-primary rounded">
            <img
              className="img-fluid"
              src="https://f1.media.brightcove.com/8/1509317117/1509317117_5745109907001_5745107092001-vs.jpg?pubId=1509317117&videoId=5745107092001"
            />
            <p className="py-4">
              The Backyard Chef is introducing the new brand, Real Pizza for the
              real pizza lovers. “Real Pizza” We are bringing pizza right out of
              the oven to your doorstep. You can now enjoy the scrumptious thin
              crust pizzas in any place of your choice. We are presenting you
              with an assortment of pizzas from traditional, all time favorites
              to something exceptional for your taste bud. Extraordinary price
              for mouth-watering pizza to treat yourself anywhere you desire!
              Craving for fresh and hot pizza. Just place an order and your
              pizza will be in your hands in no time.
            </p>
            <Button className="btn btn-warning" variant="warning">Order Now</Button>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Details;
