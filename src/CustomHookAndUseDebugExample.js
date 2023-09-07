import { useDebugValue, useState } from "react";
import { Link } from "react-router-dom";
import DescriptionBox from './components/DescriptionBox';

const useCustomHook = () => {
  const [state, setState] = useState(false);

  useDebugValue(state);

  const toggleState = () => {
    setState(prev => !prev)
  }

  return [state, toggleState];
}

const CustomHookAndUseDebugExample = () => {
  const marginStyle = { margin: 16 };

  const [value, toggleValue] = useCustomHook();

  return (
    <>
      <DescriptionBox text={`useDebugValue is a React Hook that lets you add a label to a custom Hook in React DevTools.`} />
      <div style={marginStyle}>
        <b>Value: {value ? "On" : "Off"}</b>
        <button style={{ marginLeft: 16 }} onClick={toggleValue}>Toggle</button>
      </div>
      <div style={marginStyle}>
        <Link to='/'>Exit</Link>
      </div>
    </>
  );
}

export default CustomHookAndUseDebugExample;