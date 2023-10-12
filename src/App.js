import React, { useState } from 'react';
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    const birthDate = new Date(dob);
    const today = new Date();
    const ageInMilliseconds = today - birthDate;
    const ageInYears = ageInMilliseconds / (365 * 24 * 60 * 60 * 1000);
    setAge(Math.floor(ageInYears));
  };

  return (
    <div id='body'>
    <div id='main'>
      <h1 className='m-5'>Age Calculator</h1>
      <h6>
        Enter your Date of Birth:<br></br>
        <input
          type="date"
          className='form-control m-2'
          value={dob}
          onChange={(event) => setDob(event.target.value)}
        />
      </h6>
      <button onClick={calculateAge} className='btn btn-primary m-3'>Calculate Age</button>
      {age && <p>You are <b>{age}</b> years old.</p>}
    </div>
    </div>
    
  );
}

export default App;
