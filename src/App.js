import { useState, useEffect } from 'react';
import './App.css';

const GIFS = [
  'https://media0.giphy.com/media/BCgcfnaGDaYai5eYD1/giphy.gif?cid=ecf05e47lc9w230k2kq7zatp7cou9oqdxx0atvut7enx3jo6&ep=v1_gifs_search&rid=giphy.gif&ct=g',
  'https://media2.giphy.com/media/H2SRCPod2Bfos/giphy.gif?cid=ecf05e471lfs45hks3b2h0py4cezqb9i3gd15ugd6kajnu25&ep=v1_gifs_related&rid=giphy.gif&ct=g'
];
const DIFFERENT_GIFS =  ['https://media0.giphy.com/media/MEGcFyjn4D9sI/giphy.gif?cid=ecf05e47ba42149npz84b5a97dh88sailvqqii3c8i0qnrce&ep=v1_gifs_related&rid=giphy.gif&ct=g'];


function App() {
  const [gifs, setGifs] = useState(GIFS);

  useEffect(function (){
    console.log('aqui estoy')
  })

  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(singleGif => <img src={singleGif} alt='gif'/>)
        }
      <button onClick={() => setGifs (DIFFERENT_GIFS)}>CAMBIA EL GIF</button>
        </section>
        
    </div>
  );
}

export default App;
