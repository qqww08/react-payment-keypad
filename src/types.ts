import type { ReactNode } from "react";

export type Shuffle = "always" | "fixed" | "once";
export interface IKeypad {
  onFinish: (password: string) => void;
  onPassConfirm?: (password: any) => void;
  count?: 4 | 5 | 6;
  emptyPassword?: boolean;
  className?: string;
  shuffle?: Shuffle;
  error?: string;
  messages?: string[];
  deleteAllIcon?: string | ReactNode;
  deleteIcon?: string | ReactNode;
}
export interface KeypadProps {
  onClose: () => void;
  isVisible: boolean;
  onFinish: (password: string) => void;
  onPassConfirm?: (password: string) => void;
  full?: boolean;
  count?: 4 | 5 | 6;
  emptyPassword?: boolean;
  className?: string;
  shuffle?: Shuffle;
  error?: string;
  messages?: string[];
  deleteAllIcon?: string | ReactNode;
  deleteIcon?: string | ReactNode;
}
