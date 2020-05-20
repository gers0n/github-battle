import React from "react";
import { NavLink } from "react-router-dom"; //to change some state depending if your at that dir
import { ThemeConsumer } from "../contexts/theme";

export default function Nav() {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => (
        <ul className="nav">
          <li>
            <NavLink exact activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/battle">
              Battle
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/popular">
              Popular
            </NavLink>
          </li>
          <li>
            <button
              style={{ fontSize: 30 }}
              className="btn-clear"
              onClick={toggleTheme}
            >
              {theme === "light" ? "🔦" : "💡"}
            </button>
          </li>
        </ul>
      )}
    </ThemeConsumer>
  );
}
