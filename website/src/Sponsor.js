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
import { Button } from "@mui/material";

import React from "react";

function Sponsor() {
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
            <Typography variant="h2">Want to Sponsor Us?</Typography>
          </Grid>
        </Grid>

        <div className="rectangle-spacing">
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <Grid item>
              <Button variant="contained">Sponorship Packet</Button>
            </Grid>
          </Grid>
        </div>

        {/* <img src={dropDown} alt="dropdown button" /> */}
      </body>
    </div>
  );
}

export default Sponsor;
