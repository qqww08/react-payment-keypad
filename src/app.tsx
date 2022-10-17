import { ReactPaymentKeypad } from "./lib/ReactPaymentKeypad";
import React from "react";
const App = () => {
  return (
    <ReactPaymentKeypad
      isVisible
      emptyPassword={false}
      onClose={() => null}
      className={"password"}
      onFinish={(password) => console.log(password)}
      onPassConfirm={(pass) => console.log(pass)}
      shuffle={"always"}
    />
  );
};

export default App;
