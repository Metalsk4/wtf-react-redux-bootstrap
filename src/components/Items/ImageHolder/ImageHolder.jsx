import React from "react";
import "font-awesome/css/font-awesome.min.css";

import { Card, Button, Row, Col } from "react-bootstrap";

const ImageHolder = ({ title, rating, id, onAdded, price, users, src }) => (
  <Card style={{ width: "10rem", marginTop: "20px" }}>
    <Card.Img
      variant="top"
      src={src}
      style={{ width: "10rem", height: "10rem" }}
    />
    <Card.Body>
      <Card.Title style={{ fontSize: "1em" }}>{title}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">
        <span className="fa fa-star checked">
          <span style={{ fontSize: ".9em" }}> {rating} </span>
          <span style={{ fontSize: ".9em" }}>{users} Ratings</span>
        </span>
      </Card.Subtitle>
    </Card.Body>
    <Card.Footer className="text-muted">
      <Row>
        <Col xs={6}>
          <p>&#x20b9; {price}</p>
        </Col>
        <Col xs={6}>
          <Button
            variant="outline-warning"
            type="button"
            size="sm"
            onClick={() => onAdded(id, title, price, 1)}
          >
            Add
          </Button>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
);

export default ImageHolder;
