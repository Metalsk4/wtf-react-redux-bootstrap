import React, { useState, useEffect } from "react";
import { capitalize } from "lodash";

import { Container, Row, Col, Collapse, Button } from "react-bootstrap";

import ImageHolder from "./ImageHolder/ImageHolder";

const Items = ({
  sectionHeading,
  imageData,
  itemAdded,
  isPreview,
  course,
  showCourse,
  history
}) => {
  const [openStarters, setOpenStarters] = useState(false);
  const [openMainCourse, setOpenMainCourse] = useState(false);
  const [openDesert, setOpenDesert] = useState(false);
  const [openTandoori, setOpenTandoori] = useState(false);
  const [openBeverages, setOpenBeverages] = useState(false);
  const [openBreads, setOpenBreads] = useState(false);
  useEffect(() => {
    setOpenStarters(course === "Starters");
    setOpenMainCourse(course === "Main Course");
    setOpenDesert(course === "Desert");
    setOpenTandoori(course === "Tandoori");
    setOpenBeverages(course === "Beverages");
    setOpenBreads(course === "Breads");
  }, [course]);
  const sliderData = (
    <React.Fragment>
      {imageData &&
        imageData.map(image => (
          <Col key={image._id} xs={6} md={4}>
            <ImageHolder
              key={image._id}
              onAdded={itemAdded}
              title={image.title}
              rating={image.rating}
              id={image._id}
              price={image.price}
              users={image.users}
              src={image.picture}
            />
          </Col>
        ))}
    </React.Fragment>
  );

  const courses = (
    <React.Fragment>
      <Row style={{ marginTop: "20px" }}>
        <Button
          onClick={() => {
            setOpenStarters(!openStarters);
            showCourse("Starters");
          }}
          variant="outline-info"
          aria-controls="example-collapse-Starters"
          aria-expanded={openStarters}
          block
        >
          Starters
        </Button>
      </Row>
      {course === "Starters" && (
        <>
          <Collapse in={openStarters}>
            <Row id="example-collapse-Starters">{sliderData}</Row>
          </Collapse>
        </>
      )}
      <Row style={{ marginTop: "20px" }}>
        <Button
          onClick={() => {
            setOpenMainCourse(!openMainCourse);
            showCourse("Main Course");
          }}
          variant="outline-info"
          aria-controls="example-collapse-MainCourse"
          aria-expanded={openMainCourse}
          block
        >
          Main Course
        </Button>
      </Row>
      {course === "Main Course" && (
        <>
          <Collapse in={openMainCourse}>
            <Row id="example-collapse-MainCourse">{sliderData}</Row>
          </Collapse>
        </>
      )}
      <Row style={{ marginTop: "20px" }}>
        <Button
          onClick={() => {
            setOpenDesert(!openDesert);
            showCourse("Desert");
          }}
          variant="outline-info"
          aria-controls="example-collapse-Desert"
          aria-expanded={openDesert}
          block
        >
          Desert
        </Button>
      </Row>
      {course === "Desert" && (
        <>
          <Collapse in={openDesert}>
            <Row id="example-collapse-Desert">{sliderData}</Row>
          </Collapse>
        </>
      )}
      <Row style={{ marginTop: "20px" }}>
        <Button
          onClick={() => {
            setOpenBeverages(!openBeverages);
            showCourse("Beverages");
          }}
          variant="outline-info"
          aria-controls="example-collapse-Beverages"
          aria-expanded={openBeverages}
          block
        >
          Beverages
        </Button>
      </Row>
      {course === "Beverages" && (
        <Collapse in={openBeverages}>
          <Row id="example-collapse-Beverages">{sliderData}</Row>
        </Collapse>
      )}
      <Row style={{ marginTop: "20px" }}>
        <Button
          onClick={() => {
            setOpenTandoori(!openTandoori);
            showCourse("Tandoori");
          }}
          variant="outline-info"
          aria-controls="example-collapse-Tandoori"
          aria-expanded={openTandoori}
          block
        >
          Tandoori
        </Button>
      </Row>
      {course === "Tandoori" && (
        <Collapse in={openTandoori}>
          <Row id="example-collapse-Tandoori">{sliderData}</Row>
        </Collapse>
      )}
      <Row style={{ marginTop: "20px" }}>
        <Button
          onClick={() => {
            setOpenBreads(!openBreads);
            showCourse("Breads");
          }}
          variant="outline-info"
          aria-controls="example-collapse-Breads"
          aria-expanded={openBreads}
          block
        >
          Breads
        </Button>
      </Row>
      {course === "Breads" && (
        <Collapse in={openBreads}>
          <Row id="example-collapse-Breads">{sliderData}</Row>
        </Collapse>
      )}
    </React.Fragment>
  );

  return (
    <Container>
      {isPreview && (
        <Row>
          <Col xs={4} md={4}>
            <h5 style={{ marginTop: "20px" }}>{capitalize(sectionHeading)}</h5>
          </Col>
          <Col xs={{ span: 2, offset: 6 }} md={{ span: 2, offset: 6 }}>
            <h6
              style={{ marginTop: "20px" }}
              onClick={() => {
                history.push(`./courses?course=Starters`);
              }}
            >
              See All
            </h6>
          </Col>
        </Row>
      )}
      <Row>{isPreview && sliderData}</Row>
      {!isPreview && courses}
    </Container>
  );
};

export default Items;
