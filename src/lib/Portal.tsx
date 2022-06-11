import { ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface Props {
  children: ReactNode;
}
const Portal = ({ children }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const target = document.createElement("div") as HTMLDivElement;
    target.setAttribute("id", "payment-portal");
    document.body.appendChild(target);
    (ref.current as any) = document.getElementById("payment-portal") as HTMLDivElement;
    setMounted(true);
    return () => {
      document.removeChild(target);
    };
  }, []);

  // SSR 지원
  return mounted ? createPortal(children, ref.current as any) : null;
};

export default Portal;
