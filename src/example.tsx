import PaymentKeypad from "./lib/PaymentKeypad";
import React, { useState } from "react";
import type { PaymentKeypadProps } from "./types";

const Example = () => {
  const [visible, setVisible] = useState(false);

  const setting: PaymentKeypadProps = {
    // {Required} keypad 사용 여부 입니다.
    isVisible: visible,
    // {Optional} emptyPassword true 일 경우 패스워드를 2번 입력 하도록 변경
    emptyPassword: true,
    // {Optional} 패스워드를 입력 하는 횟수를 정하는 props 입니다
    count: 6,
    // {Optional} 에러 메세지 props 입니다.
    errorMessage: "",
    // {Optional} 메세지 커스텀을 위한 props 입니다.
    messages: [
      "패스워드를 입력 해주세요.",
      "사용할 패스워드를 설정 해주세요",
      "다시 한번 입력해 주세요.",
    ],
    /**
     *  숫자 키패드 정렬 props 입니다.
     * - always 키패드 클릭 시 항상 패드를 재정렬 합니다.
     * - fixed 숫자 순서 그대로 정렬 합니다.
     * - once 키패드 입력 전 한번 랜덤으로 정렬 합니다.
     * */
    shuffle: "always",
    /**
     *   전체삭제 버튼 커스텀을 위한 props 입니다.
     *   @example
     *    deleteAllIcon: <img src="/image/icon.png"/> or "전체삭제"
     * */
    deleteAllIcon: "전체 삭제버튼",
    /**
     * 삭제 버튼 커스텀을 위한 props 입니다.
     *  @example
     *    deleteAllIcon: <img src="/image/icon.png"/> or "삭제"
     * */
    deleteIcon: "삭제버튼",
    // {Required} keypad close func
    onClose: () => {
      setVisible(false);
    },
    // {Required} keypad 입력 후 패스워드 결과 값이 나오는 func
    onFinish: (password) => {
      console.log(password);
    },
    // {Optional} emptyPassword true 일 경우 패스워드 결과 값이 return 되는 func
    onPassConfirm: (password) => {
      console.log(password);
    },
  };

  return (
    <>
      <button onClick={() => setVisible(true)}>asd</button>
      <PaymentKeypad {...setting} />
    </>
  );
};

export default Example;
