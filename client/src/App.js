import React, { useState, useEffect } from 'react';

import logo from './logo.svg';
import './App.css';

function App() {
  const [message, setMessage] = useState("test message")

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/test');
      console.log(response);
      const body = await response.json();
      console.log(body);
      if (response.status !== 200) {
        throw Error(body.message);
      } else {
        console.log(body);
        setMessage(body.express);
      }
    }
    fetchData();
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Test message: {message}
        </p>
      </header>
    </div>
  );
}

export default App;
