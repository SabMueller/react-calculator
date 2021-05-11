import './App.css';
import { useState } from 'react';

function App() {
  const [number, setNumber] = useState(0);

  /*  randomHoe forever 💛 */
  function ColorizeNumbers() {
    return <p style={{ color: `hsl(${number}, 100%, 50%)` }}>{number}</p>;
  }

  return (
    <div className="App">
      <h1>Random Calculator</h1>
      <h3>Created with React</h3>
      <ColorizeNumbers />
      <section>
        <button
          className="button"
          onClick={() => setNumber(Math.floor(-Math.random() * 360 + number))}
        >
          -random
        </button>
        <button className="button" onClick={() => setNumber(number - 10)}>
          -10
        </button>
        <button className="button" onClick={() => setNumber(number - 1)}>
          -1
        </button>
        <button className="button" onClick={() => setNumber(number + 1)}>
          +1
        </button>
        <button className="button" onClick={() => setNumber(number + 10)}>
          +10
        </button>
        <button
          className="button"
          onClick={() => setNumber(Math.floor(Math.random() * 360 + number))}
        >
          +random
        </button>
        <button className="button" onClick={() => setNumber(0)}>
          Reset
        </button>
      </section>
    </div>
  );
}

export default App;
