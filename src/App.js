import React, { useState } from 'react';
import LandingPage from './Components/LandingPage';
import SortingPage from './Components/SortingPage';
import Nav from './Components/Nav';

function App() {
  const [active, setActive] = useState(false);

  function handleClick() {
    setActive(true);
  }

  return (
    <>
      <Nav />
      <GetPage active={active} handleClick={handleClick} />
    </>
  );
}

export default App;

function GetPage({ active, handleClick }) {
  const page = active ? (
    <SortingPage />
  ) : (
    <LandingPage handleClick={handleClick} />
  );
  return page;
}
