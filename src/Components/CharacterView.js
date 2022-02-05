import "../CSS/CharDetailPage.css";
// import { useState } from "react";

function CharacterView({ character }) {
  // const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div class="charStats">
      <div className="charIntro">
        <div>Name:{character.name}</div>
        <div>Quote:{character.quote}</div>
      </div>
      <div className="charImg">
        <img src={character.image} alt="details" width="80%"></img>
      </div>
      <div className="charProperties">
        <div>Race:{character.race}</div>
        <div>Evolution:{character.evolution}</div>
        <div>Attack:{character.common_attack}</div>
      </div>
      <div className="charSummary">{character.summary}</div>
      <button className="back" onClick={handleClick}>
        Add To Deck
      </button>
    </div>
  );
}

export default CharacterView;
