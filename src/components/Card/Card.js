import React from "react";
import "../../styles/Card/Card.css";
import pokemonType from "../helpers/pokemonTypes";

function Card({ pokemon }) {
  return (
    <div className="Card">
      <div className="img">
        <img src={pokemon.sprites.front_default} alt="pokemon front" />
      </div>
      <div className="name">{pokemon.name}</div>
      <div className="types">
        {pokemon.types.map((type) => {
          return (
            <div
              className="type"
              style={{ backgroundColor: pokemonType[type.type.name] }}
            >
              {type.type.name}
            </div>
          );
        })}
      </div>
      <div className="info">
        <div className="data data--weight">
          <p className="title">Weight</p>
          <p>{pokemon.weight}kg</p>
        </div>
        <div className="data data--height">
          <p className="title">Height</p>
          <p>{pokemon.height}m</p>
        </div>
        <div className="data data--ability">
          <p className="title">Ability</p>
          <p>{pokemon.abilities[0].ability.name}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
