import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "16px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };

  const active = {background: "green"}
  return(
    <div className="navbar">
     <NavLink exact to="/" style={linkStyles} activeStyle={active}>Home</NavLink>
     <NavLink to="/movies" style={linkStyles} activeStyle={active}>Movies</NavLink>
     <NavLink to="/directors" style={linkStyles} activeStyle={active}>Directors</NavLink>
     <NavLink to="/actors" style={linkStyles} activeStyle={active}>Actors</NavLink>
    </div>
  ) 
}

export default NavBar;
