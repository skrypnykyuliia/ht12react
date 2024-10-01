import React, { useState } from 'react';
import ValueDisplay from './ValueDisplay';
import './App.css'; 

const App = () => {
  const [value, setValue] = useState('');

  const handleInputChange = (e) => {
    setValue(e.target.value); 
  };

  return (
    <div className="app-container">
      <h1>Current and Previous Value</h1>
      <input 
        type="text" 
        value={value} 
        onChange={handleInputChange} 
        placeholder="type some text"
        className="input-field"
      />
      <ValueDisplay value={value} /> {}
    </div>
  );
};

export default App;
