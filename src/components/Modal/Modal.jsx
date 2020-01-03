import React from "react";
import { Modal, Button, Spinner, Row, Col, Table } from "react-bootstrap";

const MyVerticallyCenteredModal = props => {
  const { items } = props;
  const total = items.reduce((acc, item) => {
    return acc + item.qty * item.price;
  }, 0);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Items in Cart
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Title</th>
              <th>Rate</th>
              <th>Qty</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.qty}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Row>
          <Col xs="auto" md="auto">
            <Spinner animation="grow" variant="info" />
          </Col>
          <Col xs="auto" md="auto">
            Total Price: {total}
          </Col>
          <Col xs="auto" md="auto">
            <Spinner animation="grow" variant="info" />
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MyVerticallyCenteredModal;
