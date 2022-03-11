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
        <button onClick={incrementACounter}>A ボタン</button>
        <button onClick={incrementBCounter}>B ボタン</button>
      </>
    </div>
  );
}
