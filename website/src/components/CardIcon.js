import React from "react";

import { Card, CardContent, Grid, Typography } from "@mui/material";

import student from "../assets/icons/student.png";
import earth from "../assets/icons/earth.png";
import clock from "../assets/icons/clock.png";
import folder from "../assets/icons/folder.png";

export const CardIcon = () => {
  return (
    <div>
      <Card style={{ backgroundColor: "rgba(0, 71, 255, 1)" }}>
        <CardContent style={{ margin: "15px" }}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <img src={student} alt="student icon" />
            </Grid>
            <Grid item>
              <Typography>700+ Students</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};
