import React, { useState } from 'react';

function UserInput({ setTotalValue }) {
  const [total, setTotal] = useState('');

/*  commenting to hndle 999 case
 const handleSubmit = (e) => {
      e.preventDefault();
    //   console.log('this is handle submit')
    // Validate user input, and if valid, update the total value in the parent component.
    
    if (total && !isNaN(total)) {
        setTotalValue(parseFloat(total));
        
      }
     
  }; */
  const handleSubmit = (e) => {
  e.preventDefault();
  
  // Validate user input, and if valid, update the total value in the parent component.
  if (total && !isNaN(total)) {
    const parsedTotal = parseFloat(total);
    
    if (parsedTotal < 2500) {
      alert('Total value should be at least 2500. Please enter a correct value.');
    } else {
      setTotalValue(parsedTotal);
    }
  }
}

  return (
    <div>
      <h2>Enter the desired amount:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={total}
          onChange={(e) => setTotal(e.target.value)}
        />
        <button type="submit">enter amount</button>
          </form>
           {total && !isNaN(total) && (
        <h1>Total Value: {parseFloat(total)}</h1>
          )}
          <h2> task rate 1.44</h2>
          <h3>total vol = {total/ 141.51 }</h3>
    </div>
  );
}

// deviceInfo.js
export function getDeviceInfo() {
  const userAgent = window.navigator.userAgent;
  return {
    userAgent,
  };
}

export default UserInput;
