import React from "react";
import "./App.css";
import logo from "./assets/beachHacksLogo.png";
import dropDown from "./assets/scrollDownButton.png";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

function Home() {
  return (
    <div className="frame-1">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={4}
      >
        <Grid item>
          <img src={logo} alt="beachhacks logo" />
        </Grid>
        <Grid item>
          <Typography variant="h1">Coming Soon</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h4">February 25-26th, 2023</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5">
            Our website is under construction. We'll be here soon with our new
            awesome site.
          </Typography>
        </Grid>
        <Grid item>
          <img
            className="drop-down-spacing"
            src={dropDown}
            alt="dropdown button"
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
