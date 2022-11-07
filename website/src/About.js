import "./styles/App.css";

import dropDown from "./assets/scrollDownButton.png";
import student from "./assets/icons/student.png";
import earth from "./assets/icons/earth.png";
import clock from "./assets/icons/clock.png";
import folder from "./assets/icons/folder.png";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

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
            <h2>What is BeachHacks?</h2>
          </Grid>
          <Grid item>
            <h5>
              BeachHacks is a 24-hour event at California State University, Long
              Beach where students come <br /> together and create technical
              projects. Teams can compete for prizes, connect with industry
              <br />
              sponsors, and participate in workshops.
              </h5>
          </Grid>
        </Grid>

        <div className="rectangle-spacing">
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={12}
          >
            <Grid item>
              <div className="blue-rectangle " />
              <img src={student} alt="student icon" className="student-icon" />
              <p className="student-700">700+ Students</p>
            </Grid>
            <Grid item>
              <div className="blue-rectangle " />
              <img src={earth} alt="earth icon" className="earth-icon" />
              <p className="countries-10">10+ Countries</p>
            </Grid>
            <Grid item>
              <div className="blue-rectangle " />
              <img src={clock} alt="clock icon" className="clock-icon" />
              <p className="hours-144">144+ Hours</p>
            </Grid>
            <Grid item>
              <div className="blue-rectangle " />
              <img src={folder} alt="folder icon" className="folder-icon" />
              <p className="projects-120">120+ Projects</p>
            </Grid>
          </Grid>
        </div>

        {/* <img src={dropDown} alt="dropdown button" /> */}
      </body>
    </div>
  );
}

export default About;
