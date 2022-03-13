import ReactKeypad from "./lib/ReactKeypad";
import React, { useState } from "react";
import type { KeypadProps } from "./types";

const Example = () => {
  const [error, setError] = useState("");
  const setting: KeypadProps = {
    isVisible: true,
    emptyPassword: true,
    errorMessage: error,
    onClose: () => {
      console.log(12);
    },
    onFinish: (key) => {
      console.log(key);
    },
    onPassConfirm: (pass) => {
      console.log(pass);
      setError("틀렸습니다.");
    },
  };
  return <ReactKeypad {...setting} />;
};

export default Example;
