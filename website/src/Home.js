import React from "react";
import "./styles/App.css";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import logo from "./assets/bhbanner.png";

import Grid from "@mui/material/Grid";

function Home() {
  return (
    <div className="frame-1">
      <img src={logo} alt="beachhacks logo" className="logo-spacing" />

      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={4}
      >
        <Grid item>
          <h2>Coming Soon</h2>
        </Grid>
        <Grid item>
          <h4>February 25-26th, 2023</h4>
        </Grid>
        <Grid item style={{ maxWidth: "600px" }}>
          <h5>
            Our website is under construction. We'll be here soon with our new
            awesome site.
          </h5>
        </Grid>
        <Grid item mt={6}>
          {/* <img
            className="drop-down-spacing"
            src={dropDown}
            alt="dropdown button"
          /> */}
          <ArrowDownwardIcon className="svg_icons" />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
