import { Link } from "react-router-dom";
import "../CSS/SideNav.css";
import M from "../Assets/M.jpeg";

function SideNavBar({ logStatButton }) {
  return (
    <nav className="global-navigation">
      <div className="home">
        <Link to="/">
          <img src={M} alt="logo" />
        </Link>
      </div>

      <div className="nav">
        <button>
          <Link to="/dashboard" style={{ textDecoration: "none" }}>
            🎮dashboard
          </Link>
        </button>
        <button>
          <Link to="/animes" style={{ textDecoration: "none" }}>
            🦸🏿‍♂️animes
          </Link>
        </button>
        <button>
          <Link to="/quiz" style={{ textDecoration: "none" }}>
            💬Quiz
          </Link>
        </button>
        <button>
          <Link to="/animes/new" style={{ textDecoration: "none" }}>
            🧟‍♂️add anime
          </Link>
        </button>
        <button>
          <Link to="/art" style={{ textDecoration: "none" }}>
            ❤️‍🔥fan art
          </Link>
        </button>
      </div>
    </nav>
  );
}

export default SideNavBar;
