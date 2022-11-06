import "./App.css";
import logo from "./assets/beachHacksLogo.png";
import dropDown from "./assets/scrollDownButton.png";
import Grid from "@mui/material/Grid";

function App() {
  return (
    <body>
      <div className="frame-1">
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={6}>
            <img src={logo} alt="beachhacks logo" />
          </Grid>
          <Grid item xs={4}>
            <h1>Coming Soon</h1>
          </Grid>
          <Grid item xs={2}>
            <h2>February 25-26th, 2023</h2>
          </Grid>
          <Grid item xs={6}>
            <h3>
              Our website is under construction. We'll be here soon with our new
              awesome site.
            </h3>
          </Grid>
          <Grid item xs={6}>
            <img
              className="drop-down-spacing"
              src={dropDown}
              alt="dropdown button"
            />
          </Grid>
        </Grid>
      </div>
    </body>
  );
}

export default App;
