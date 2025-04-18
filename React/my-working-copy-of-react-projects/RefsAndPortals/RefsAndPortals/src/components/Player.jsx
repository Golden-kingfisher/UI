import { useState } from 'react';
import {useRef, state} from 'react';

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  const playerName = useRef();

  function handleClick(event){
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = '';

  }
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "Unknown Entity"}</h2>
      <p>
        <input 
        ref={playerName}
        type="text" />

        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
