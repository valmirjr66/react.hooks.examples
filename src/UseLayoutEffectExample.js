import { useEffect, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import DescriptionBox from './components/DescriptionBox';

const UseLayoutEffectExample = () => {
  const marginStyle = { margin: 16 };

  const [value, setValue] = useState(0);

  const generateNewValue = () => {
    for (let i = 0; i < 10e8; i++);

    if (value === 0) {
      setValue(10 + Math.random() * 200);
    }
  }

  useEffect(generateNewValue, [value]);
  // useLayoutEffect(generateNewValue, [value]);

  return (
    <>
      <DescriptionBox text={`useLayoutEffect is a version of useEffect that fires before the browser repaints the screen.
                            It blocks the browser from repainting the screen. When used excessively, this makes your app slow.
                            When possible, prefer useEffect.`} />
      <div style={marginStyle}>
        <button onClick={() => setValue(0)}>My value is: {value}</button>
      </div>
      <div style={marginStyle}>
        <Link to='/'>Exit</Link>
      </div>
    </>
  );
}

export default UseLayoutEffectExample;