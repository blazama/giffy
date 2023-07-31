import { useState, useEffect } from 'react';
import './App.css';

const apiURL = 'https://api.giphy.com/v1/gifs/search?api_key=zXyDwfknLUQJnyYgDIlryOP7vbscgCGR&q=panda&limit=10&offset=0&rating=g&lang=en&bundle=messaging_non_clips';

function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(function (){
    console.log('aqui estoy')
    fetch(apiURL)
    .then(res => res.json()) 
    .then(response => {
      const {data} = response
      const gifs = data.map(image => image.images.fixed_height_small.url)  
      console.log(gifs)
      setGifs(gifs)
    })
  },[] )

  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(singleGif => <img src={singleGif} alt='gif'/>)
        }
      {/* <button onClick={() => setGifs (DIFFERENT_GIFS)}>CAMBIA EL GIF</button> */}
        </section>
        
    </div>
  );
}

export default App;
