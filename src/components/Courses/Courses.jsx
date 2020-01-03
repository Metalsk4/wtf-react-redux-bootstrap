import React from "react";
import "./Courses.css";

import { Container, Row, Col, Card } from "react-bootstrap";

const Courses = ({ history }) => {
  const courses = [
    "Starters",
    "Main Course",
    "Desert",
    "Beverages",
    "Tandoori",
    "Breads"
  ];
  return (
    <Container>
      <Row style={{ marginTop: "80px" }}>
        <Col>
          <h5>Courses</h5>
        </Col>
      </Row>
      <Row>
        {courses.map(course => (
          <Col xs={6} md={4} key={course}>
            <Card
              className="bg-dark text-white"
              style={{ width: "10rem", marginTop: "20px" }}
            >
              <Card.Img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLAbp45UMYvajVo-FxJDSKDsYGKNNtScGIaNwb_Quq7pWwU6ow"
                alt="Card image"
                style={{ width: "10rem", height: "10rem" }}
              />
              <Card.ImgOverlay
                key={course}
                onClick={() => {
                  history.push(`./courses?course=${course}`);
                }}
              >
                <Card.Body>
                  <Card.Text
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      paddingTop: "10px"
                    }}
                  >
                    {course}
                  </Card.Text>
                </Card.Body>
              </Card.ImgOverlay>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Courses;
