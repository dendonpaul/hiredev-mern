import { Typography } from "@mui/material";
import "./Header.css";
const Header = (props) => (
  <header className="header">
    <Typography variant="h4">{props.pageTitle}</Typography>
  </header>
);

export default Header;
