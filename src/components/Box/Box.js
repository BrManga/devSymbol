import React from "react";

function Box({ boxSelected }) {
  const state = [
    [91, 93],
    [40, 41],
    [123, 125],
    [47],
    [36],
    [38],
    [34],
    [96],
    [44],
    [59],
    [58],
    [60],
    [62]
  ];
  const meaning = [
    "squarebrackets",
    "parentheses",
    "curlybrackets",
    "slash",
    "dolar",
    "and",
    "quotation",
    "backticks",
    "comma",
    "semicolon",
    "colon",
    "lessthan",
    "greaterthan"
  ];
  var tempArray = "";
  var neArray = [];
  for (let i = 0; i < state.length; i++) {
    var useArray = [];
    var chara = "";
    for (let j = 0; j < state[i].length; j++) {
      chara = String.fromCharCode(state[i][j]);
      tempArray += chara;
    }
    useArray.push(meaning[i]);
    useArray.push(tempArray);
    tempArray = "";
    neArray.push(useArray);
  }
  console.log(neArray);

  const result = neArray.map(item => {
    return (
      <div
        className="box"
        value={item[1]}
        onClick={() => boxSelected(item[0])}
        key={item[0]}
      >
        {item[1]}
      </div>
    );
  });
  return <>{result}</>;
}

export default Box;
