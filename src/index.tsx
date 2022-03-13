import React from "react";
import ReactDOM from "react-dom";
import ReactKeypad from "./lib/ReactKeypad";

ReactDOM.render(
  <ReactKeypad isVisible onClose={() => null} onFinish={(e) => console.log(e)} />,
  document.getElementById("root")
);
