import React, { createContext, memo, useContext, useState } from 'react';
import { Link } from "react-router-dom";
import DescriptionBox from './components/DescriptionBox';

const Context = createContext(null);

const Component3 = memo(() => {
  console.log("Component #3  re-rendered");

  const message = useContext(Context);

  return (
    <div style={{ padding: 10, backgroundColor: 'green' }}>
      {message}
    </div>
  );
});

const Component2 = memo(() => {
  console.log("Component #2  re-rendered");

  return (
    <div style={{ padding: 30, backgroundColor: 'red' }}>
      <Component3 />
    </div>
  );
});

const Component1 = memo(() => {
  console.log("Component #1  re-rendered");

  return (
    <div style={{ padding: 20, backgroundColor: 'yellow' }}>
      <Component2 />
    </div>
  );
});

const UseContextExample = () => {
  const marginStyle = { margin: 16, marginBottom: 16 };

  const [value, setValue] = useState('Hello, world!');

  return (
    <Context.Provider value={value}>
      <DescriptionBox text={`useContext is a React Hook that lets you read context from your component.
                            React searches the component tree and finds the closest context provider above for that particular context.`} />
      <div style={marginStyle}>
        <label htmlFor='name'>Value: </label>
        <input
          value={value}
          onChange={(event, _) => setValue(event.target.value)}
        />
      </div>
      <Component1 />
      <div style={{ margin: 16 }}>
        <Link to='/'>Exit</Link>
      </div>
    </Context.Provider>
  );
}

export default UseContextExample;