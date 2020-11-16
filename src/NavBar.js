import React , {Link} from "react";
import { NavLink } from "react-router-dom";
import './App.css';

function NavBar(props) {
  return (
      <div className="NavBar">
        <nav >
          <NavLink exact to="/soda">
            Soda
          </NavLink>
          <NavLink exact to="/chocolate">
            Chocolate
          </NavLink>
          <NavLink exact to="/chips">
            Chips
          </NavLink>
        </nav>
      </div>
  )
}

export default NavBar;