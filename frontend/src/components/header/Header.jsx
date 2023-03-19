import { Routes, Route, Link } from "react-router-dom";
import NavMenu from "../menu/NavMenu";
import "./Header.css";

const Header = (props) => (
  <header className="header">
    <NavMenu />
  </header>
);

export default Header;
