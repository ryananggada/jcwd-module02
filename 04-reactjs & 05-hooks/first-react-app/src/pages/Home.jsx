import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledButton = styled.button`
  background-color: aquamarine;
  font-size: 32px;
  color: black;
`;

const StyledH2 = styled.h2`
  color: orange;
  font-size: 48px;
`;

function Home() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${counter} times`;
  }, [counter]);

  function buttonClick() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <main>
        <StyledH2>Welcome to the homepage</StyledH2>
        <p>You can do this, I believe in you</p>
      </main>
      <StyledButton onClick={buttonClick}>Click me plz</StyledButton>
      <p>{counter}</p>
      <nav>
        <Link to='/about'>Go to About</Link>
      </nav>
    </div>
  );
}

export default Home;
