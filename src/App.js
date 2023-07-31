import { useState } from 'react';
import './App.css';

function App() {
  const [value, updateValue] = useState(['https://media0.giphy.com/media/BCgcfnaGDaYai5eYD1/giphy.gif?cid=ecf05e47lc9w230k2kq7zatp7cou9oqdxx0atvut7enx3jo6&ep=v1_gifs_search&rid=giphy.gif&ct=g']);

  return (
    <div className="App">
      <section className="App-content">
      
        <img src={value} alt='gif'/>
      </section>
    </div>
  );
}

export default App;
