import React, { useState, useEffect } from "react";

import { Button, Collapse, Row } from "react-bootstrap";

const CategoryComponent = ({ children, category, showCourse, isOpen }) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(isOpen);
  }, []);
  return (
    <>
      <Row style={{ marginTop: "20px" }}>
        <Button
          onClick={() => {
            setOpen(!open);
            showCourse(category);
          }}
          variant="outline-info"
          aria-controls="example-collapse-text"
          aria-expanded={open || isOpen}
          block
        >
            
          {category}
        </Button>
      </Row>

      <Collapse in={open || isOpen}>
        <Row id="example-collapse-text">{children}</Row>
      </Collapse>
    </>
  );
};

export default CategoryComponent;
