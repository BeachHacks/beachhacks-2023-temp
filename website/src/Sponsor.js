import "./styles/App.css";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import MailIcon from "@mui/icons-material/Mail";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "@mui/material";

import React from "react";

function Sponsor() {
  return (
    <div className="frame-3">
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
            mb={8}
          >
            <Grid item>
              {/* <Button
                href="https://tinyurl.com/BeachHacks2023-SponsorPacket"
                variant="contained"
                target="_blank"
              >
                Sponorship Packet
              </Button> */}
              <a
                href="https://tinyurl.com/BeachHacks2023-SponsorPacket"
                target="_blank"
                class="button-18"
                role="button"
              >
                Sponsorship Packet
              </a>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item display="flex" mr={4}>
              <Typography mt={0.5}>
                <MailIcon />
              </Typography>
              <Link
                href="mailto:beachhacks@csulb.acm.org"
                color="inherit"
                target="_blank"
              >
                <Typography variant="h5" ml={2}>
                  beachhacks@csulb.acm.org
                </Typography>
              </Link>
            </Grid>
            <Grid ml={4} item display="flex">
              <Typography mt={0.5}>
                <InstagramIcon />
              </Typography>
              <Link
                href="https://www.instagram.com/beachhackscsulb/?hl=en"
                color="inherit"
                target="_blank"
              >
                <Typography variant="h5" ml={2}>
                  beachhackscsulb
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </div>

        {/* <img src={dropDown} alt="dropdown button" /> */}
      </body>
    </div>
  );
}

export default Sponsor;
