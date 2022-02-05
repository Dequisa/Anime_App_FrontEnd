import React from "react";
import YoutubeEmbed from "./YoutubeEmbed";
import { Link } from "react-router-dom";
import "../CSS/AnimeDetailsPage.css";
import Reviews from "./Reviews";

function AnimeDetailsView({ anime }) {
  return (
    <div className="DetailsView">
      <h3>{anime.title}</h3>
      <div className="AnimeSection">
        <img src={anime.image} alt="character" />
        <div className="descip">
          <div>{anime.description}</div>

          <button>
            <Link to={`/animes/${anime.anime_id}/reviews`}>
              See What Parents Have To Say
            </Link>
          </button>
        </div>
      </div>
      <div className="AnimeText">CHARACTER LIST</div>
      <div className="Image-outter">
        {anime.characters &&
          anime.characters.map((character) => {
            return (
              <div className="Image-Inner">
                <div>{character.name}</div>
                <img src={character.image} alt="character" />
              </div>
            );
          })}
      </div>
      <div>Pending Characters: </div>
      <button>
        <Link to={`/animes/${anime.anime_id}/characters`}>
          Show Character Stats
        </Link>
      </button>
      <button>
        <Link to={`/animes/${anime.anime_id}/addCharacters`}>
          Add New Character
        </Link>
      </button>

      <Reviews />
      <YoutubeEmbed
        key={anime.anime_id}
        embedId={anime.yt_embedid}
        anime={anime}
      />
      {/* )} */}
    </div>
  );
}

export default AnimeDetailsView;
