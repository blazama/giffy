import { useState } from 'react';
import './App.css';

function App() {
  const state = useState([]);
  const value = state[0];
  const updateValue = state[1];

  return (
    <div className="App">
      <section className="App-content">
      
        <p>
         Gifs
        </p>

      </section>
    </div>
  );
}

export default App;
