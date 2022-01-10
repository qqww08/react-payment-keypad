import React, { useCallback, useEffect, useMemo, useState } from "react";
import styled from "styled-components";

import { IKeypad } from "../types";
import useShuffle from "../hooks/useShuffle";

const Keypad = (props: IKeypad) => {
  const {
    onFinish,
    count = 6,
    className = "react-keypad",
    shuffle = "fixed",
    message = "패스워드를 입력 해주세요.",
    error = "",
  } = props;

  const [keyData, setKeyData] = useState<string[]>([...Array(count).map((item) => item)]);
  const keyNumber = useShuffle({ shuffle, keyData });
  const keyValueLength = useMemo(() => keyData.join("").length, [keyData]);

  const handleClick = useCallback(
    (value: string) => {
      const keyValue = keyData;
      keyValue.splice(keyValueLength, 1, value);
      setKeyData([...keyValue]);
    },
    [keyData, keyValueLength]
  );

  useEffect(() => {
    if (keyValueLength > 5) {
      setKeyData([...Array(count).map((item) => item)]);
      onFinish(keyData.join(""));
    }
  }, [keyValueLength]);

  useEffect(() => {
    return () => {
      setKeyData([...Array(count).map((item) => item)]);
    };
  }, []);

  return (
    <__Container className={`${className}-container`}>
      <__Message className={`${className}-message`}>{message}</__Message>
      <__ErrorMessage className={`${className}-error`}>{error}</__ErrorMessage>
      <__BulletWrapper className={`${className}-bullet`}>
        {keyData?.map((item, index) => (
          <__Bullet key={index} activeColor={item} />
        ))}
      </__BulletWrapper>

      <__PasswordWrapper className={`${className}-button-wrapper`}>
        {keyNumber.map((item, index) => (
          <__KeyPad key={index} className={`${className}-button`} onClick={() => handleClick(item)}>
            {item}
          </__KeyPad>
        ))}
      </__PasswordWrapper>
    </__Container>
  );
};

export default Keypad;

const __Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4vh 0;
`;
const __BulletWrapper = styled.ul`
  width: 60%;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style-type: none;
  margin-top: 0;
`;
const __ErrorMessage = styled.p``;
const __Bullet = styled.li<{ activeColor: string }>`
  border-radius: 50%;
  width: 15px;
  height: 15px;
  background: ${(props) => (props.activeColor ? "#000000" : "#a6a6a6")};
`;
const __PasswordWrapper = styled.div`
  width: 100%;
`;
const __Message = styled.p`
  text-align: center;
`;
const __KeyPad = styled.button`
  text-transform: none;
  overflow: visible;
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  outline: 0;
  margin: 0; /* 2 */
  border-style: none;
  background: #fff;
  -webkit-appearance: button;
  cursor: pointer;
  width: 33.3%;
  padding: 15px 0;

  &:active {
    background: rgba(0, 0, 0, 0.1);
  }
`;
