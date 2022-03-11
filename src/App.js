import "./styles.css";
import React, { useState } from "react";

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

  const incrementACounter = () => setCountStateA(countStateA + 1);
  const incrementBCounter = () => setCountStateB(countStateB + 1);

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
