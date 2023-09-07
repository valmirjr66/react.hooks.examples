import React, { memo, useCallback, useState } from 'react';
import { Link } from "react-router-dom";
import DescriptionBox from './components/DescriptionBox';

const ChildComponent = memo(({ children, clickCallback }) => {
  console.log("Child re-rendered");

  return (
    <div style={{
      backgroundColor: 'red',
      width: 300,
      color: 'black',
      textAlign: 'center',
      lineHeight: 5
    }}>
      {children}
      <button style={{ marginLeft: 20 }} onClick={clickCallback}>Click</button>
    </div>
  );
})

const ParentComponent = () => {
  console.log("Parent re-rendered");

  const [count, setCount] = useState(0);

  // const incrementCallback = () => {
  //   setCount(prev => prev + 1);
  // }
  const incrementCallback = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return (
    <div style={{
      backgroundColor: 'yellow',
      width: 300,
      margin: 16,
      color: 'black',
      padding: 16,
      textAlign: 'center'
    }}>
      <ChildComponent clickCallback={incrementCallback}>
        Hello world
      </ChildComponent>
      {count}
    </div>
  );
}

const MemoAndUseCallbackExample = () => {
  console.log("Page re-rendered");

  return (
    <>
      <DescriptionBox text={`memo lets you skip re-rendering a component when its props are unchanged.`} />
      <DescriptionBox text={`useCallback is a React Hook that lets you cache a function definition between re-renders.`} />
      <ParentComponent>
      </ParentComponent>
      <div style={{ margin: 16 }}>
        <Link to='/'>Exit</Link>
      </div>
    </>
  );
}

export default MemoAndUseCallbackExample;