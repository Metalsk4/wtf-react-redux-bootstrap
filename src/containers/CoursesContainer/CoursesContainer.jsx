import React, { Component } from "react";
import { connect } from "react-redux";
import queryString from "query-string";

import data from "../../data/data";
import Items from "./../../components/Items/Items";
import * as actions from "../../store/actions/index";
import { Container, Col, Row } from "react-bootstrap";

class Courses extends Component {
  state = {
    course: ""
  };

  showCourse = course => {
    this.setState({ course: course });
  };

  itemAdder = (id, title, price, qty) => {
    const { onItemAdded } = this.props;
    onItemAdded({ id, title, price, qty });
  };

  footerClickedHandler = () => {
    this.props.history.push("./cart");
  };

  componentDidMount() {
    const { location } = this.props;
    const { course } = queryString.parse(location.search);
    this.setState({ course: course });
  }
  render() {
    const { course } = this.state;
    const filteredImageData = data.properties.filter(
      prop => prop.category === course
    );

    return (
      <Container>
        <Row>
          <Col md={{ span: "3", offset: "5" }} xs={{ span: "3", offset: "3" }}>
            <h2 style={{marginTop: "80px"}}>Courses</h2>
          </Col>
        </Row>

        <Row>
          <Col>
            <Items
              showCourse={this.showCourse}
              course={course}
              imageData={filteredImageData}
              itemAdded={this.itemAdder}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}


const mapStateToProps = state => {
  console.log(state);
  return {
    cart: state.cart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onItemAdded: item => dispatch(actions.addItem(item))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
