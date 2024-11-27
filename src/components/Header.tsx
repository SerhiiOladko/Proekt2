import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => (
  <header className="header">
    <nav>
      <NavLink to="/" className="nav-link" activeClassName="active-link">
        Home
      </NavLink>
      <NavLink to="/history" className="nav-link" activeClassName="active-link">
        History
      </NavLink>
    </nav>
  </header>
);

export default Header;
