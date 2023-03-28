import React from "react";
import BookIcon from '@mui/icons-material/Book';
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>
        <BookIcon className="bookicon"/>
        Take-A-Note
      </h1>
      <Link className="home" to="/">Home</Link>
    </header>
  );
}

export default Header;
