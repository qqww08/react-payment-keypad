import React from "react";
import styled from "styled-components";
import Keypad from "./Keypad";

import type { IKeypad } from "../types";
import Drawer from "./Drawer";

interface Props extends IKeypad {
  onClose: () => void;
  isVisible: boolean;
  full?: boolean;
}

const ReactKeypad = (props: Props) => {
  const { onClose, isVisible, full = false, ...rest } = props;

  return (
    <__Wrapper>
      <Drawer onToggle={onClose} visible={isVisible} direction={"bottom"} full={full}>
        <Keypad {...rest} />
      </Drawer>
    </__Wrapper>
  );
};

export default ReactKeypad;
const __Wrapper = styled.section`
  #drawer {
    border-radius: 30px 30px 0 0;
  }
`;
