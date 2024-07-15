import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello, ${name}!`);
  };

  return (
    <div className="App">
      <h1>Hello React</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;