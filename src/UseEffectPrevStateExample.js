import { useState } from "react";
import { Link } from "react-router-dom";

const UseEffectPrevStateExample = () => {
  const marginStyle = { margin: 16 };

  const [count, setCount] = useState(0);

  // Not using Previous Value
  // const incrementCallback = () => {
  //   setCount(count + 1);
  //   setCount(count + 1);
  // }

  // Using Previous Value
  const incrementCallback = () => {
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
  }

  return (
    <>
      <div style={marginStyle}>
        <b>Value: </b>
        <span style={marginStyle}>{count}</span>
        <button onClick={incrementCallback}>+2</button>
      </div>
      <div style={marginStyle}>
        <Link to='/'>Exit</Link>
      </div>
    </>
  );
}

export default UseEffectPrevStateExample;