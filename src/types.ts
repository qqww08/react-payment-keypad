import type { ReactNode } from "react";

export type Shuffle = "always" | "fixed" | "once";

export interface PaymentKeypadProps extends KeypadProps {
  /**
   *    keypad close func
   * */
  onClose: () => void;

  /**
   *   keypad 사용 여부 입니다.
   *
   *   @default false
   * */
  isVisible: boolean;
}

export interface KeypadProps {
  /**
   *   keypad 입력 후 패스워드 결과 값이 나오는 func
   * */
  onFinish: (password: string) => void;

  /**
   *  emptyPassword true 일 경우 패스워드를 2번 입력 하도록 변경
   *
   *  @default false
   * */
  emptyPassword?: boolean;
  /**
   *  emptyPassword true 일 경우 패스워드 결과 값이 return 되는 func
   * */
  onPassConfirm?: (password: string[]) => void;

  /**
   *   true 일 경우 패스워드창이 페이지를 꽉 채웁니다.
   *   @default false
   * */
  full?: boolean;

  /**
   *  패스워드를 입력 하는 횟수를 정하는 props 입니다
   * */
  count?: 4 | 5 | 6;

  /**
   *  숫자 키패드 정렬 props 입니다.
   * - always 키패드 클릭 시 항상 패드를 재정렬 합니다.
   * - fixed 숫자 순서 그대로 정렬 합니다.
   * - once 키패드 입력 전 한번 랜덤으로 정렬 합니다.
   *
   *  @default fixed
   * */
  shuffle?: "always" | "fixed" | "once";
  /**
   *  에러 메세지 props 입니다.
   *
   *  @default ""
   * */
  errorMessage?: string;

  /**
   *  메세지 커스텀을 위한 props 입니다.
   *
   * ["패스워드를 입력 해주세요.",
   * "사용할 패스워드 설정",
   * "다시 한번 입력해 주세요.",]
   * */
  messages?: [string, string, string];
  /**
   *   전체삭제 버튼 커스텀을 위한 props 입니다.
   * */
  deleteAllIcon?: string | ReactNode;
  /**
   * 삭제 버튼 커스텀을 위한 props 입니다.
   * */
  deleteIcon?: string | ReactNode;
  opener?: boolean;
}
