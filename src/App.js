import React from 'react';
import './App.css';
import players from './players';
import Player from './player';

function App() {
  return (
    <div className="app-container">
      {players.map((player, index) => (
        <Player
          key={index}
          name={player.name}
          equipe={player.equipe}
          nationalite={player.nationalite}
          numero={player.numero}
          age={player.age}
          image={player.image}
        />
      ))}
    </div>
  );
}

export default App;
