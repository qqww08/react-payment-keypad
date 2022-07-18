import * as React from "react";
import Keypad from "./Keypad";

import type { ReactPaymentKeypadProps } from "../types";
import Drawer from "./Drawer";

export const ReactPaymentKeypad = (props: ReactPaymentKeypadProps) => {
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
