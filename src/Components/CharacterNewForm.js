import { Link, useHistory, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "../CSS/CharacterNewForm.css";

function CharacterNewForm(props) {
  let history = useHistory();
  const { id } = useParams();

  const addCharacter = async (anime) => {
    try {
      await axios.post("http://localhost:3001/animes", anime);
      history.push(`/animes/${id}`);
    } catch (err) {
      console.log("Error From Add Character POST Request", err);
    }
  };

  const [character, setCharacter] = useState({
    name: "",
    quote: "",
  });

  const handleTextChange = (event) => {
    setCharacter({ ...character, [event.target.id]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCharacter(character);
    setCharacter({
      name: "",
      quote: "",
    });
  };

  return (
    <div className="characterForm">
      <h3>New Form Here</h3>
      <Link to={`/animes/${id}`}>
        <button>Take Me Back!</button>
      </Link>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Character's Name:</label>
        <input
          id="name"
          value={character.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Type Character Name Here"
          required
        />

        <label htmlFor="quote">Character's quote</label>
        <input
          id="quote"
          value={character.quote}
          type="text"
          onChange={handleTextChange}
          placeholder="image"
        />
        <button onSubmit={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default CharacterNewForm;
