import { Link } from "react-router-dom";
import "../CSS/AnimeListItem.css";

function AnimeListItem({ anime }) {
  return (
    <div className="list">
      <div className="listImg">
        <div>
          <h2>{anime.title}</h2>
          <Link to={`/animes/${anime.anime_id}`}>
            <img src={anime.image} alt="anime" />
          </Link>
        </div>
      </div>
      <div className="listDetails">
        <h5>{anime.description}</h5>
        <h5>Recommended Age Range:</h5>
        <h5>Age 8 and up</h5>
      </div>
    </div>

    // <div className="listItems">
    //   <div className="approvalList">
    //     <div>
    //       <h5>Recommended Age Range:</h5>
    //       <h5>Age 8 and up</h5>
    //     </div>
    //     <div className="animeImg">
    //       <h2>{anime.title}</h2>
    //       <Link to={`/animes/${anime.anime_id}`}>
    //         <img src={anime.image} alt="anime" />
    //       </Link>
    //     </div>
    //     <div className="approvalCheck">
    //       <h5>Is this Anime Child Friendly?</h5>
    //       <div>
    //         <input type="checkbox" id="friendly" name="friendly" />
    //         <label for="friendly">Child Friendly</label>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default AnimeListItem;
