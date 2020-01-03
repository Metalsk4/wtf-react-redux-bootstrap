import React, { Component } from "react";
import { connect } from "react-redux";

import { Row, Col } from "react-bootstrap";

import * as actions from "../../store/actions/index";
import Specials from "../../components/Specials/Specials";
import Courses from "../../components/Courses/Courses";
import data from "../../data/data";

class LandingPageContainer extends Component {
  state = {
    isPreview: true,
    toBeLoaded: ""
  };
  itemAdder = (id, title, price, qty) => {
    const { onItemAdded } = this.props;
    onItemAdded({ id, title, price, qty });
  };
  footerClickedHandler = () => {
    this.props.history.push("./cart");
  };

  render() {
    const special = ["TODAYS SPECIAL", "CHEFS SPECIAL", "PREVIOUSLY ORDERED"];

    console.log(this.props);
    return (
      <React.Fragment>
        <Row>
          <Col xs={12} md={12}>
            <Courses {...this.props} />
          </Col>
        </Row>

        {special.map(sp => (
          <Row key={sp}>
            <Col xs={12} md={12}>
              <Specials
                sectionHeading={sp}
                itemAdded={this.itemAdder}
                imageData={data.previewProperties}
                isPreview
                history={this.props.history}
              />
            </Col>
          </Row>
        ))}
      </React.Fragment>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPageContainer);
