import React from "react";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Box from "./components/Box/Box";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col xs={3} className="left">
            <Box/>
          </Col>
          <Col xs={9} className="right">dsads</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
