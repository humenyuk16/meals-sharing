import { Link } from "react-router-dom";
import SearchBar from "./SearchBar/Search";
const Navbar = () => {
  return (
    <nav className="navbar">
      <img src="/logo.png" alt="logo" className="logo" />
      <SearchBar />
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/meals">Meals</Link>
        <Link to="/reviews">Reviews</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
