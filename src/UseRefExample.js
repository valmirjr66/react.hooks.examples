import { useRef } from "react";
import { Link } from "react-router-dom";
import DescriptionBox from './components/DescriptionBox';

const UseRefExample = () => {
  const marginStyle = { margin: 16 };

  console.log("Re-rendered");

  const count = useRef(0);

  const incrementCallback = () => {
    count.current = count.current + 1;
    console.log(`Value is: ${count.current}`);
  }

  const decrementCallback = () => {
    count.current = count.current - 1;
    console.log(`Value is: ${count.current}`);
  }

  const checkbox1Ref = useRef(null);
  const checkbox2Ref = useRef(null);

  const clickAllBoxes = () => {
    checkbox1Ref.current.click();
    checkbox2Ref.current.click();
  }

  return (
    <>
      <DescriptionBox
        text={`useRef is a React Hook that lets you reference a value that’s not needed for rendering.`}
      />
      <div>
        <button style={marginStyle} onClick={decrementCallback}>-1</button>
          Counter wont't render
        <button style={marginStyle} onClick={incrementCallback}>+1</button>
      </div>
      <hr />
      <DescriptionBox
        text={`You can also use useRef to manipulate the DOM.`}
      />
      <div>
        <button style={marginStyle} onClick={clickAllBoxes}>Click both</button>
        <input type="checkbox" ref={checkbox1Ref} />
        <input type="checkbox" ref={checkbox2Ref} />
      </div>
      <div style={marginStyle}>
        <Link to='/'>Exit</Link>
      </div>
    </>
  )
}

export default UseRefExample;