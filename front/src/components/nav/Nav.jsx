import { Link } from "react-router-dom";
import SearchBar from "../searchbar/SearchBar";
import NavLinkComp from "../navLink/NavLinkComp";
import style from './Nav.module.css'

function Nav({ onSearch }) {
  return (
    <div className={style.nav}>
      <Link to="/home">
        <button>Home</button>
      </Link>
      <NavLinkComp to={"/favorites"}>
        <span>Favorites</span>
      </NavLinkComp>
      <NavLinkComp to="/about">
        {" "}
        <span>About</span>
      </NavLinkComp>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}

export default Nav;
