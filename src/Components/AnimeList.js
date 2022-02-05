import AnimeListItem from "./AnimeListItem";
import Pagination from "./Pagination";
import { useState, useEffect } from "react";
import axios from "axios";
import "../CSS/AnimeList.css";

function AnimeList({ rez }) {
  const [animes, setAnimes] = useState([]);
  // const [inputValue, setInputValue] = useState("");
  const [originalAnimeList, setOriginalAnimeList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [animesPerPage] = useState(3);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getanimes = async () => {
      // setLoading(true);
      try {
        const res = await axios.get("http://localhost:3001/animes");
        setOriginalAnimeList(res.data.payload);
        setAnimes(res.data.payload);
        // setLoading(false);
      } catch (err) {
        console.log("Error Response from anime Search request", err);
      }
    };
    getanimes();
  }, []);

  const animeFilterOnChange = (e) => {
    const inputValue = e.target.value;
    // setInputValue(e.target.value);
    // e.target.reset();
    if (inputValue === "") {
      setAnimes(originalAnimeList);
      return;
    }
    const filteredAnimes = originalAnimeList.filter((anime) => {
      return anime.title.toLowerCase().includes(inputValue.toLowerCase());
    });
    setAnimes(filteredAnimes);
  };

  //  Get current anime
  const indexOfLastAnime = currentPage * animesPerPage;
  const indexOfFirstAnime = indexOfLastAnime - animesPerPage;
  const currentAnime = animes.slice(indexOfFirstAnime, indexOfLastAnime);
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="List">
      <div className="searchBar">
        <label htmlFor="search"> Search by title </label>
        <input type="text" onChange={animeFilterOnChange} />
        {/* <button onClick={handleSearch}>SEARCH</button> */}
      </div>
      <div>
        {currentAnime.map((anime) => (
          <AnimeListItem
            key={anime.anime_id}
            anime={anime}
            animeOnChange={animeFilterOnChange}
          />
        ))}
      </div>
      <Pagination
        animesPerPage={animesPerPage}
        totalPosts={animes.length}
        paginate={paginate}
      />
    </div>
  );
}

export default AnimeList;
