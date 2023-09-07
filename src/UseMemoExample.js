import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import DescriptionBox from './components/DescriptionBox';

const UseMemoExample = () => {
  const marginStyle = { margin: 16 };

  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');

  const calculateAge = (bday) => {
    console.log("Calculating age...");

    const dateDiff = new Date(new Date() - new Date(bday));
    const yearsOld = dateDiff.getFullYear() - 1970;

    return yearsOld;
  }

  // Age is a derivated state
  // const age = calculateAge(birthdate);
  const age = useMemo(() => calculateAge(birthdate), [birthdate]);

  return (
    <>
      <DescriptionBox
        text={`useMemo lets you cache the result of a calculation between re-renders.
              If you need to memoize a function/callback, consider using useCallback.`}
      />
      <div style={marginStyle}>
        <label htmlFor='name'>Name: </label>
        <input
          value={name}
          onChange={(event, _) => setName(event.target.value)}
        />
      </div>
      <div style={marginStyle}>
        <label htmlFor='name'>Birthdate: </label>
        <input
          type="date"
          value={birthdate}
          onChange={(event, _) => setBirthdate(event.target.value)}
        />
      </div>
      <div style={marginStyle}>
        <span>You are: {age ? `${age} years old` : '---'}</span>
      </div>
      <div style={marginStyle}>
        <Link to='/'>Exit</Link>
      </div>
    </>
  )
}

export default UseMemoExample;