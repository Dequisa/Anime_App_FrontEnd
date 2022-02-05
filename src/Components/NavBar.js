import { Link } from "react-router-dom";
// import "../CSS/Nav.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import SideNavBar from "./SideNavBar";
// import { userIn, userOut } from "./counterSlice";

function NavBar() {
  let history = useHistory({});
  // const authenticate = useSelector((state) => state.counter.value);
  // const dispatch = useDispatch();

  const [logStatus, setLogStatus] = useState();
  console.log("logstatus:", logStatus);
  const logOutClick = async () => {
    try {
      let res = await axios.post("http://localhost:3001/user/logout");
      if (res.status === 200 && logStatus.data !== "") {
        setLogStatus(res.data);
        history.push("/");
      }
    } catch (err) {
      console.log("Error Returned for LogOut POST:", err);
    }
  };

  return (
    <nav className="Nav">
      <div>
        <Link to="/dashboard" style={{ textDecoration: "none" }}>
          {/* Dashboard */}
        </Link>
      </div>

      <div>
        <Link to="/animes" style={{ textDecoration: "none" }}>
          {/* See Animes */}
        </Link>
      </div>

      <div>
        <Link to="/quiz" style={{ textDecoration: "none" }}>
          {/* Quiz Me */}
        </Link>
      </div>

      <div>
        <Link to="/animes/new" style={{ textDecoration: "none" }}>
          {/* Add New Anime */}
        </Link>
      </div>

      <div>
        <Link to="/art" style={{ textDecoration: "none" }}>
          {/* Fan Art */}
        </Link>
      </div>
      {/* {
        <div>
          <button
            onClick={logOutClick}
            to="/userlogin"
            style={{ textDecoration: "none" }}
          >
            Logout
          </button>
        </div>
      } */}
      <SideNavBar logStatButton={logOutClick} />
    </nav>
  );
}

export default NavBar;
