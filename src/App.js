import React from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import {
  Container,
  Button,
  Badge,
  Navbar,
  Nav,
  Form,
} from "react-bootstrap";

import LandingPageContainer from "./containers/LandingPageContainer/LandingPageContainer";
import ErrorMessageContainer from "./containers/ErrorMesageContainer/ErrorMessageContainer";
import CoursesContainer from "./containers/CoursesContainer/CoursesContainer";
import Modal from "./components/Modal/Modal";

const App = props => {
  const [modalShow, setModalShow] = React.useState(false);
  const routes = (
    <Switch>
      <Route path="/landing" exact component={LandingPageContainer} />
      <Route path="/error" exact component={ErrorMessageContainer} />
      <Route path="/courses" exact component={CoursesContainer} />
      <Redirect to="/landing" />
    </Switch>
  );
  const qty = props.items.reduce((acc, item) => {
    return acc + item.qty;
  }, 0);
  return (
    <div>
      <Navbar bg="dark" fixed="top" style={{ textAlign: "center" }}>
        <Navbar.Brand></Navbar.Brand>
        <Nav className="mr-auto"></Nav>
        <Form inline>
          <Button variant="primary" onClick={() => setModalShow(true)}>
            Cart <Badge variant="light">{qty}</Badge>
          </Button>
        </Form>
      </Navbar>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        items={props.items}
      />
      <Container>{routes}</Container>
      {/* <Row>
        <Col>
          <Footer items={props.items} clicked={() => setModalShow(true)} />
        </Col>
      </Row> */}
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    items: state.cart.items
  };
};

export default withRouter(connect(mapStateToProps, null)(App));
