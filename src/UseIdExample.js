import { useId } from "react"
import { Link } from "react-router-dom";
import DescriptionBox from "./components/DescriptionBox";

const Component = () => {
  const id = useId();

  return <div style={{ margin: 16 }}>The unique ID of this component is: {id}</div>;
}

const UseIdExample = () => {
  return (
    <>
      <DescriptionBox
        text={`useId generates an unique ID string associated with this particular useId call in this particular component,
        this can be very useful for accessibility attributes. Should not be used as 'key' property, neither called inside loops.`}
      />
      <Component />
      <Component />
      <Component />
      <div style={{ margin: 16 }}>
        <Link to='/'>Exit</Link>
      </div>
    </>
  );
}

export default UseIdExample;