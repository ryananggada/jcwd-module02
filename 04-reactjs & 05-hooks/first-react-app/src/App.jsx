/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './App.css';
import { useState, createContext } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import useCounter from './useCounter';
import Home from './pages/Home';

const globalStateContext = createContext('');

function Count() {
  const [count, increment, decrement] = useCounter();

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

function Navigation() {}

function MyProfile({ name, age, children }) {
  // const h2Style = { color: 'green', backgroundColor: 'lightpink' };

  return (
    <div>
      <h1 className='color-red'>Name: {name}</h1>
      <h2>Age: {age}</h2>
      <p>{children}</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <main>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
      <nav>
        <Link to='/'>Go to Home</Link>
      </nav>
    </div>
  );
}

function List() {
  const [shopItems, setShopItems] = useState(['broccoli', 'apple', 'eggs']);

  return (
    <div>
      <h1>Shopping List</h1>

      <button
        onClick={() => {
          setShopItems([...shopItems, 'new item']);
        }}
      >
        Add item
      </button>

      <ul>
        {shopItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/list' element={<List />} />
      <Route path='/count' element={<Count />} />
    </Routes>
  );
}

export default App;
