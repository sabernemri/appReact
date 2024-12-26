import React from 'react';

const Player = ({ name, equipe, nationalite, numero, age, image }) => {
  return (
    <div className="player-card">
      <img src={image} alt={name} className="player-image" />
      <div className="player-details">
        <h2>{name}</h2>
        <p><strong>equipe:</strong> {equipe}</p>
        <p><strong>nationalite:</strong> {nationalite}</p>
        <p><strong>numero:</strong> {numero}</p>
        <p><strong>age:</strong> {age}</p>
      </div>
    </div>
  );
};

export default Player;
