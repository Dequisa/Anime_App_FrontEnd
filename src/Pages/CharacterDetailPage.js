import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CharacterView from "../Components/CharacterView";
import "../CSS/CharDetailPage.css";
function CharacterDetailPage() {
  const [characters, setCharacters] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3001/animes/${id}/characters`
        );

        setCharacters(res.data.payload);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCharacters();
  }, [id]);
  console.log("list of characters:", characters);
  return (
    <div className="charDetails">
      {characters &&
        characters.map((character) => {
          return <CharacterView key="character_id" character={character} />;
        })}
    </div>
  );
}
export default CharacterDetailPage;
