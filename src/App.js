import React from "react";
import "./App.scss";
import { Container, Row, Col } from "react-bootstrap";
import Box from "./components/Box/Box";
import Description from "./components/Description/Description";
import { data } from "./data";
import { useState } from "react";
import de from "./images/de.svg";
import gb from "./images/gb.svg";
import tr from "./images/tr.svg";
function App() {
  const [selected, setSelected] = useState("squarebrackets");
  const languageInitialState = {
    de: [
      "Was ist das?",
      "Klicken Sie auf das linke Symbol, um zu sehen, wie es in verschiedenen Sprachen aufgerufen wird"
    ],
    eng: [
      "What is that?",
      "Click on the left symbol to see how it is called in different languages"
    ],
    tr: [
      "Nedir bu?",
      "Farklı dillerde nasıl adlandırıldığını öğrenmek için soldaki simgelere tıklayın"
    ]
  };
  const [language, setLanguage] = useState(languageInitialState.de);
  const boxSelected = as => {
    setSelected(as);

    //setvalue(e.target.value);
  };
  let descript = data[selected].map(data => <Description data={data} />);
  return (
    <div className="App">
      <Container>
        <Row>
          <Col xs={3} className="left">
            <Box boxSelected={boxSelected} />
          </Col>
          <Col xs={9} className="right">
            <Row className="title">
              <h1 className="mainTitle">{language[0]}</h1>
              <div className="smallFlagsContainer">
                <img
                  value="de"
                  onClick={() => setLanguage(languageInitialState.de)}
                  className="smallFlag"
                  src={de}
                  alt="Germany Flag"
                />
                <img
                  value="eng"
                  onClick={() => setLanguage(languageInitialState.eng)}
                  className="smallFlag"
                  src={gb}
                  alt="England Flag"
                />
                <img
                  value="tr"
                  onClick={() => setLanguage(languageInitialState.tr)}
                  className="smallFlag"
                  src={tr}
                  alt="Turkey Flag"
                />
              </div>
              <h5 className="subtitle">{language[1]}</h5>
            </Row>
            <div className="meaningPart">{descript}</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
