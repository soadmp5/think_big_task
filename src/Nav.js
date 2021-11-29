import "./App.css";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div className="App">
      <nav>
        <h3>Logo</h3>
        <ul className="nav-links">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/sources">
            <li>Sources</li>
          </Link>
          <Link to="articles">
            <li>Articles</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
