import AnimeDetailsView from "../Components/AnimeDetailsView";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../CSS/AnimeDetailsPage.css";

function AnimeDetailPage() {
  const [anime, setAnime] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/animes/${id}`);
        setAnime(res.data.payload);
      } catch (err) {
        console.log("Error Returned from Anime GET request:", err);
      }
    };
    fetchAnime();
  }, [id]);

  return (
    <div className="DetailPage">
      <h2>Details</h2>
      <AnimeDetailsView key={anime.anime_id} anime={anime} />
    </div>
  );
}

export default AnimeDetailPage;
