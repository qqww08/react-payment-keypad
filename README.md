![da2b8967-2dbe-455b-a07e-1dafb2bf6941](https://user-images.githubusercontent.com/62181345/149617448-d98c2f8f-3a75-4371-8eca-eca5b3819df1.gif)

* [Getting Started](#getting-started)
* [Basic Usage](#basic-usage)
* [Props](#props)
* [License](#license)

## Getting Started

You can install the module via `npm`

```sh
npm install react-number-keypad --save
```



### Description
사용하기 쉬운 PIN 번호 입력 컴포넌트 

### Basic Usage

```js
import React from "react";
import ReactDOM from "react-dom";
import ReactKeypad from "react-number-keypad";

ReactDOM.render(
    <ReactKeypad
        isVisible
        emptyPassword={false}
        onClose={() => null}
        className={"password"}
        onFinish={(password) => console.log(password)}
        onPassConfirm={(pass) => console.log(pass)}
        shuffle={"always"}
    />,
    document.getElementById("root")
);


```

## Props

| Prop           | Type                        | Required? | Default Value | Description                                       |
| -------------- |-----------------------------| --------- | ------------- |---------------------------------------------------|
| isVisible      | `boolean`                   | Required  | -             | keypad 사용 여부 입니다.                                 |
| onClose        | `function`                  | Required  | -             | keypad close func                                 |
| onFinish       | `function`                  | Required  | -             | keypad 입력 후 패스워드 결과 값이 나오는 func                   |
| count          | `number`                    | Optional  | `6`           | 패스워드를 입력 하는 횟수를 정하는 props 입니다                     |
| emptyPassword  | `boolean`                   | Optional  | `false`       | emptyPassword true 일 경우 패스워드를 2번 입력 하도록 변경        |
| onPassConfirm  | `function`                  | Optional  | `true`        | emptyPassword true 일 경우 패스워드 결과 값이 return 되는 func |
| shuffle        | `always or fixed or once`   | Optional  | `fixed`   | -always 키패드 클릭 시 항상 패드를 재정렬 합니다.- fixed 숫자 순서 그대로 정렬 합니다.- once 키패드 입력 전 한번 랜덤으로 정렬 합니다.                  |
| errorMessage          | `string`                    | Optional  | -             | 에러 메세지 props 입니다.                               |
| messages       | `array`                     | Optional  | ` 메세지 커스텀을 위한 props 입니다.`   | message                                           |
| deleteAllIcon  | `string or React.ReactNode` | Optional  | `전체삭제`   | 전체삭제 버튼 커스텀을 위한 props 입니다.                                             |
| deleteIcon     | `string or React.ReactNode` | Optional  | `삭제`   |삭제 버튼 커스텀을 위한 props 입니다.|
| full     | `boolean`                   | Optional  | `false`   | true 일 경우 패스워드창이 페이지를 꽉 채웁니다.                     |



## License
MIT

