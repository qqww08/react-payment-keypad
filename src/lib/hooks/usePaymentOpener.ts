import { useState } from "react";

type TValue = string | string[];
export interface ReturnValue {
  password: TValue;
  onPaymentOpen: (url: string, size: { width: number; height: number }) => void;
}

export const usePaymentOpener = (): ReturnValue => {
  const [value, setValue] = useState<TValue>([]);

  const handleWindowOpen = (url: string, size: { width: number; height: number }) => {
    const { width, height } = size;
    (window as any).onPaymentOpener = (value) => {
      setValue(value);
    };
    window.open(url, "_blank", `width=${width},height=${height}`);
  };

  return { password: value, onPaymentOpen: handleWindowOpen };
};
