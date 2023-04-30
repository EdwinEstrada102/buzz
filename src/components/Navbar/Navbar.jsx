import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-container">
        <img className="logo" src={logo} />
        <h1>Buzz</h1>
      </div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink>Events</NavLink>
        </li>
        <li>
          <NavLink to="opportunities">Opportunities</NavLink>
        </li>
        <li>
          <NavLink>Report</NavLink>
        </li>
        <li>
          <NavLink>Login</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
