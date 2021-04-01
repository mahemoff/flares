import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';

function App() {

  const [data, setData] = useState('');

  React.useEffect(() => {
    async function fetchRand() {
      console.log('rand!');
      const randomEdgeURL = "https://autumn-hall-70d7.skyflare.workers.dev/?max=500";
      const randPayload = await fetch(randomEdgeURL)
      const rand = await randPayload.text();
      console.log('RAND!', rand);
      setData(rand);
    }
    fetchRand();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to <strong>Flares</strong>!!!
        </p>
        <p>
          Random: { data }
        </p>
        <a
          className="App-link"
          href="https://example.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          I love flares!
        </a>
      </header>
    </div>
  );
}

export default App;
