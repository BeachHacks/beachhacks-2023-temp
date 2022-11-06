import "./App.css";
import logo from "./assets/beachHacksLogo.png";
import dropDown from "./assets/scrollDownButton.png";
import Grid from "@mui/material/Grid";

function App() {
  return (
    <body>
      <div>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={6}>
            <img src={logo} alt="beachhacks logo" />
          </Grid>
          <Grid item xs={6}>
            <h1>Coming Soon</h1>
          </Grid>
          <Grid item xs={6}>
            <h3>February 25-26th, 2023</h3>
          </Grid>
          <Grid item xs={6}>
            <h4>
              Our website is under construction. We'll be here soon with our new
              awesome site.
            </h4>
          </Grid>
          <Grid item xs={6}>
            <img src={dropDown} alt="dropdown button" />
          </Grid>
        </Grid>
      </div>
    </body>
  );
}

export default App;
