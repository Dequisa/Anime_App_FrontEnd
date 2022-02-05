import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "../CSS/AnimeNewForm.css";

function AnimeNewForm(props) {
  let history = useHistory();

  const addAnime = async (anime) => {
    try {
      await axios.post("http://localhost:3001/animes", anime);
      history.push(`/animes`);
    } catch (err) {
      console.log("Error Response From Add Anime Request:", err);
    }
  };

  const [anime, setAnime] = useState({
    title: "",
    image: "",
    characters: "",
    age: "",
  });

  const handleTextChange = (event) => {
    setAnime({ ...anime, [event.target.id]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addAnime(anime);
    setAnime({
      title: "",
      image: "",
      characters: "",
      age: "",
    });
  };

  return (
    <div className="NewFormInput">
      <h3>New Form Here</h3>
      <Link to={`/animes`}>
        <button>Take Me Back!</button>
      </Link>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Anime Title</label>
        <input
          id="title"
          value={anime.title}
          type="text"
          onChange={handleTextChange}
          placeholder="Type Anime Title Here"
          required
        />

        <label htmlFor="image">photo link</label>
        <input
          id="image"
          value={anime.image}
          type="text"
          onChange={handleTextChange}
          placeholder="Add image"
        />

        <label htmlFor="characters">Characters</label>
        <input
          id="characters"
          // value={anime.image}
          type="text"
          onChange={handleTextChange}
          placeholder="Choose characters"
        />

        <label htmlFor="age">Suggested Age Range</label>
        <input
          id="age"
          // value={anime.image}
          type="text"
          onChange={handleTextChange}
          placeholder="Identify appropiate age range"
        />
        <button onSubmit={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default AnimeNewForm;
