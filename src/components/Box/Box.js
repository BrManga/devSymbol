import React from "react";

function Box() {
  const state = [
    [91, 93],
    [40, 41],
    [123, 125],
    [47],
    
    [36],
    [38],
    [34],[96],
    [44],    
 
    [59],
    [60],
    [62],

  ];
  var tempArray = "";
  var useArray = [];
  for (let i = 0; i < state.length; i++) {
    console.log(state[i]);
    var chara = "";
    for (let j = 0; j < state[i].length; j++) {
      chara = String.fromCharCode(state[i][j]);
      tempArray += chara;
    }
    useArray.push(tempArray);
    tempArray = "";
  }
  console.log(useArray);

  const result = useArray.map(item => <div className="box">{item}</div>);
  console.log(result);

  return <>{result}</>;
}

export default Box;
