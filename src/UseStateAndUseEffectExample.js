import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UseStateAndUseEffectExample = () => {
  const marginStyle = { margin: 16 };

  console.log("Re-rendered");

  const [count, setCount] = useState(0);

  const incrementCallback = () => {
    setCount(count + 1);
  }

  const decrementCallback = () => {
    setCount(count - 1);
  }

  useEffect(() => {
    console.log("Initial useEffect");
    return () => console.log("Final useEffect");
  }, []);

  useEffect(() => {
    console.log(`Counter updated, new value is: ${count}`);
  }, [count]);

  return (
    <>
      <div>
        <button style={marginStyle} onClick={decrementCallback}>-1</button>
        <b>Value: </b>
        <span style={marginStyle}>{count}</span>
        <button onClick={incrementCallback}>+1</button>
      </div>
      <div style={marginStyle}>
        <Link to='/'>Exit</Link>
      </div>
    </>
  );
}

export default UseStateAndUseEffectExample;