import React from "react";
import { Row, Col } from "react-flexbox-grid";

import "./title.scss";

const title = (props) => (
  <Row>
    <Col className="big__title" data-aos="fade-up">
      <h2 className="weight800 font30 padding40" style={{color:props.color && props.color}}>{props.title}</h2>
    </Col>
  </Row>
);

export default title;
