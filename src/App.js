import "./styles.css";
import React, { useCallback, useState, useMemo } from "react";

const Count = React.memo(({ text, countState }) => {
  console.log(countState);
  return (
    <p>
      {text}:{countState}
    </p>
  );
});

const Button = React.memo(({ counterState, buttonValue }) => {
  console.log("Button child component:", buttonValue);
  return <button onClick={counterState}>{buttonValue}</button>;
});

const square = (parameter) => {
  console.log("square関数の実行観察");
  let i = 0;
  while (i < 10000) i++;
  return parameter * parameter;
};

export default function App() {
  const [countStateA, setCountStateA] = useState(0);
  const [countStateB, setCountStateB] = useState(0);

  const incrementACounter = useCallback(() => setCountStateA(countStateA + 1), [
    countStateA
  ]);
  const incrementBCounter = useCallback(() => setCountStateB(countStateB + 1), [
    countStateB
  ]);

  const resultA = () => {
    return setCountStateA(countStateA + 1);
  };

  const resultB = () => {
    return setCountStateB(countStateB + 1);
  };

  const squareArea = useMemo(() => square(countStateB), [countStateB]);

  return (
    <div className="App">
      <>
        <Count text="A ボタン" countState={countStateA} />
        <Count text="B ボタン" countState={countStateB} />
        <Button counterState={incrementACounter} buttonValue="A ボタン" />
        <Button counterState={incrementBCounter} buttonValue="B ボタン" />

        <p>
          計算結果A: {countStateA}
          <button onClick={resultA}>計算A + 1</button>
        </p>
        <p>【正方形の面積】</p>
        <p>
          計算結果B: {countStateB}
          <button onClick={resultB}>計算B + 1</button>
        </p>
        <p>計算結果B　×　計算結果B = {squareArea}</p>
      </>
    </div>
  );
}
