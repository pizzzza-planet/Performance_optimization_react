import "./styles.css";
import React, { useCallback, useState } from "react";

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

export default function App() {
  const [countStateA, setCountStateA] = useState(0);
  const [countStateB, setCountStateB] = useState(0);

  const incrementACounter = useCallback(() => setCountStateA(countStateA + 1), [
    countStateA
  ]);
  const incrementBCounter = useCallback(() => setCountStateB(countStateB + 1), [
    countStateB
  ]);

  return (
    <div className="App">
      <>
        <Count text="A ボタン" countState={countStateA} />
        <Count text="B ボタン" countState={countStateB} />
        <Button counterState={incrementACounter} buttonValue="A ボタン" />
        <Button counterState={incrementBCounter} buttonValue="B ボタン" />
      </>
    </div>
  );
}
