import React from "react";
import Keypad from "./Keypad";

import type { PaymentKeypadProps } from "../types";
import Drawer from "./Drawer";

type Props = PaymentKeypadProps;

const PaymentKeypad = (props: Props) => {
  const { onClose, isVisible, full = false, ...rest } = props;
  const { opener } = { ...rest };

  return (
    <Drawer
      onToggle={onClose}
      visible={opener || isVisible}
      direction={"bottom"}
      full={opener || full}
    >
      <Keypad {...rest} />
    </Drawer>
  );
};

export default PaymentKeypad;
