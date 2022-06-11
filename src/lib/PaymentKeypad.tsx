import React from "react";
import Keypad from "./Keypad";

import type { PaymentKeypadProps } from "../types";
import Drawer from "./Drawer";

type Props = PaymentKeypadProps;

const PaymentKeypad = (props: Props) => {
  const { onClose, isVisible, full = false, ...rest } = props;

  return (
    <Drawer onToggle={onClose} visible={isVisible} direction={"bottom"} full={full}>
      <Keypad {...rest} />
    </Drawer>
  );
};

export default PaymentKeypad;
