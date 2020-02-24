import React from "react";
import { Row, Col } from "react-bootstrap";

//import speaker from "../../images/speaker.png";

/* const play = () => {

}; */
function Description({ data }) {
  return (
    <Row className="descriptionRow">
      <Col className="flagDescription" xs={2}>
        <img className="flag" src={data[1]} alt="flag" />
      </Col>
      <Col className="afterFlagDescription" xs={9}>
        <h2>{data[2]}</h2>
      </Col>
      {/*       <Col xs={1}>
        <img className="speaker" src={speaker} alt="speaker" onClick={play} />
      </Col> */}
    </Row>
  );
}

export default Description;
