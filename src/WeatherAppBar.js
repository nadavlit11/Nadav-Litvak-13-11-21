import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AppBar, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import styles from "./App.module.css";

const RouteButton = styled(Button)({
  backgroundColor: "white",
});
const RouteLink = styled(Link)({
  textDecoration: "none",
});

export default function WeatherAppBar() {
  const location = useLocation();

  return (
    <AppBar>
      <nav className={styles.AppBar}>
        <RouteButton
          variant={location.pathname === "/" ? "contained" : "outlined"}
        >
          <RouteLink to="/">Home</RouteLink>
        </RouteButton>
        <RouteButton
          variant={
            location.pathname === "/favorites" ? "contained" : "outlined"
          }
        >
          <RouteLink to="/favorites">Favorites</RouteLink>
        </RouteButton>
      </nav>
    </AppBar>
  );
}
