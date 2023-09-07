import { useState } from "react";
import { Link } from "react-router-dom";

const stateInitializer = () => {
  console.log("Running intializer...");
  return 0;
}

const UseStateLazyExample = () => {
  const marginStyle = { margin: 16 };

  // Normal:
  // const [count, setCount] = useState(stateInitializer());
  // Lazy:
  const [count, setCount] = useState(stateInitializer);

  const incrementCallback = () => {
    setCount(count + 1);
  }

  const decrementCallback = () => {
    setCount(count - 1);
  }

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

export default UseStateLazyExample;