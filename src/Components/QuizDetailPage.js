import { useState, useEffect } from "react";
import axios from "axios";
import "../CSS/Quiz.css";
function QuizDetailPage(favorites) {
  let faves = favorites.favorites;
  console.log("favorite array", faves);
  const [quote, setQuote] = useState({});
  const [isActive, setIsActive] = useState(false);
  const [isActiveHint, setIsActiveHint] = useState(false);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const res = await axios.get("https://animechan.vercel.app/api/random", {
          withCredentials: false,
        });
        setQuote(res.data);
      } catch (err) {
        console.log("Error Returned From Quote Fetch Request:", err);
      }
    };
    fetchQuote();
  }, []);

  const handleClick = () => {
    isActive === true ? setIsActive(false) : setIsActive(true);
  };
  const handleHint = () => {
    isActiveHint === true ? setIsActiveHint(false) : setIsActiveHint(true);
  };
  return (
    <div className="QuizDetail">
      <div className="popular">
        {/* <div>Popular Animes</div> */}
        <div className="favList">
          <div>Check out fan favorites</div>
          {favorites &&
            faves.map((favorite) => {
              return (
                <div key={favorite.id}>
                  <div>{favorite.anime}</div>
                  <img src={favorite.img} alt="thumbnail" />
                </div>
              );
            })}
        </div>

        <div className="quoteSection">
          <h2>How Well Do You Know Your Anime Character By Quote?</h2>
          <div className="quote">{quote.quote}</div>
          {isActiveHint ? <div>Anime: {quote.anime}</div> : null}
          <button onClick={handleHint}>
            <div>HINT</div>
          </button>
          {isActive ? <div>Character: {quote.character}</div> : null}
          <button onClick={handleClick}>
            {" "}
            <div>SHOW</div>
          </button>
          <button onClick={() => window.location.reload(false)}>
            New Quote!
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuizDetailPage;
