import { memo, useState, useTransition } from 'react';
import DescriptionBox from './components/DescriptionBox';
import { Link } from 'react-router-dom';

const Tab1 = () => ("You're tab #1 ");
const Tab3 = () => ("You're tab #3 ");

const Tab2 = memo(() => {
  const SlowItem = ({ index }) => {
    const startTime = performance.now();
    while (performance.now() - startTime < 1);

    return <li>Post #{index + 1}</li>;
  }

  const items = [];

  for (let i = 0; i < 1500; i++)
    items.push(<SlowItem key={i} index={i} />);

  return <ul>{items}</ul>;
});

const UseTransitionExample = () => {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState(1);

  function selectTab(nextTab) {
    startTransition(() => {
      setTab(nextTab);
    });
  }

  return (
    <>
      <DescriptionBox text={`useTransition is a React Hook that lets you update the state without blocking the UI.`} />
      <div style={{ margin: 16 }}>
        <button onClick={() => selectTab(1)}>
          Tab #1
        </button>
        <button onClick={() => selectTab(2)}>
          Tab #2 (Slow)
        </button>
        <button onClick={() => selectTab(3)}>
          Tab #3
        </button>
      </div>
      <div style={{ margin: 16 }}>
        {isPending && 'Loading...'}
        <br />
        {tab === 1 && <Tab1 />}
        {tab === 2 && <Tab2 />}
        {tab === 3 && <Tab3 />}
      </div>
      <div style={{ margin: 16 }}>
        <Link to='/'>Exit</Link>
      </div>
    </>
  );
}

export default UseTransitionExample;