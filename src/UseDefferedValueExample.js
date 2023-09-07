import React, { useDeferredValue, useMemo, useState } from 'react';
import { Link } from "react-router-dom";
import DescriptionBox from './components/DescriptionBox';

const Component = ({ input }) => {
  const deferredInput = useDeferredValue(input);
  // const deferredInput = input;

  const list = useMemo(() => {
    const result = [];

    if (deferredInput) {
      for (let i = 0; i < 10e3 * 3; i++) {
        result.push(<div style={{ padding: 10 }} key={i}>{i}. {deferredInput}</div>);
      }
    }

    return result;
  }, [deferredInput]);

  return (
    <div style={{ backgroundColor: 'blue', maxHeight: 400, overflowY: 'auto' }}>
      {list}
    </div>
  );
};

const UseDefferedValueExample = () => {
  const marginStyle = { margin: 16 };

  const [value, setValue] = useState('');

  return (
    <>
      <DescriptionBox text={`useDeferredValue is a React Hook that lets you defer (debounce) updating a part of the UI.`} />
      <div style={marginStyle}>
        <label htmlFor='name'>Value: </label>
        <input
          value={value}
          onChange={(event, _) => setValue(event.target.value)}
        />
      </div>
      <Component input={value} />
      <div style={{ margin: 16 }}>
        <Link to='/'>Exit</Link>
      </div>
    </>
  );
}

export default UseDefferedValueExample;