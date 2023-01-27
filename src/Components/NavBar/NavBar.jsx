import React from "react";
import { Link } from "react-router-dom";
import "../NavBar/NavBar.css";

function NavBar(props) {
  return (
    <div className="navbar-div">
      <nav>
        <ul>
          <li className="navbar-item" id={props.Home}>
            <Link to="/">Home</Link>
          </li>
          <li className="navbar-item" id={props.Today}>
            <Link to="/today">Today</Link>
          </li>
          <li className="navbar-item">
            <a href="https://reposfit.netlify.app/
" target="_blank">ReposFit</a>

          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
