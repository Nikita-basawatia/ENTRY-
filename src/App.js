/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; */
import React, { useState } from 'react';
import Appp from './components/Appp'
import Auth from './components/Auth'
import UserInput from './components/UserInput';
import EntryGenerator from './components/EntryGenerator';
import ResultDisplay from './components/ResultDisplay';

function App() {
  const [totalValue, setTotalValue] = useState(null);
const [accessGranted, setAccessGranted] = useState(false);

  // Function to handle access grant
  const grantAccess = () => {
    setAccessGranted(true);
  };

  return (
    <div className="App">
      {/*<Auth />
       // adding achnages here */}
       {accessGranted ? (
        // Render the main app component when access is granted
        <>
        <h1>Entries Generator App</h1>
      <Appp />
      <UserInput setTotalValue={setTotalValue} />
      {totalValue !== null && (
        <EntryGenerator totalValue={(totalValue/ 141.5).toFixed(2) }  />
      )} </>
      ) : (
        // Render the Auth component for code entry
        <Auth onAccessGrant={grantAccess} />
      )}

      {/*  tis was original <h1>Entries Generator App</h1>
      <Appp />
      <UserInput setTotalValue={setTotalValue} />
      {totalValue !== null && (
        <EntryGenerator totalValue={(totalValue/ 141.5).toFixed(2) }  />
      )} */}
      {/* Implement the logic to generate entries based on totalValue */}
      {/* Pass the generated entries to the ResultDisplay component */}
      {/* <ResultDisplay generatedEntries={<h2></h2>} /> */}
   
    </div>
  );
}

export default App;
 //"start": "react-scripts start",