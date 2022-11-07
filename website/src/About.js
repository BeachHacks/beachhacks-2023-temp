import "./styles/App.css";

import dropDown from "./assets/scrollDownButton.png";
import student from "./assets/icons/student.png";
import earth from "./assets/icons/earth.png";
import clock from "./assets/icons/clock.png";
import folder from "./assets/icons/folder.png";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import React from "react";

function About() {
  return (
    <div className="frame-2">
      <body>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={4}
        >
          <Grid item>
            <Typography variant="h2">What is BeachHacks?</Typography>
          </Grid>
          <Grid item>
            <Typography align="center" variant="h5">
              BeachHacks is a 24-hour event at California State University, Long
              Beach where students come <br /> together and create technical
              projects. Teams can compete for prizes, connect with industry
              <br />
              sponsors, and participate in workshops.
            </Typography>
          </Grid>
        </Grid>

        <div className="rectangle-spacing">
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={12}
          ></Grid>
        </div>

        {/* <img src={dropDown} alt="dropdown button" /> */}
      </body>
    </div>
  );
}

export default About;
