// Libraries
import * as React from "react";
import { Grid, Cell } from "baseui/layout-grid";

// Component
import Header from "../components/header";
import LoginButton from "../components/loginButton";

function Landing() {
  return (
    <>
      <Grid>
        <Header />
      </Grid>
      <hr />

      <Grid
        overrides={{
          Grid: {
            style: {
              display: "flex",
              justifyContent: "center",
            },
          },
        }}
      >
        <Cell span={8}>
          <div
            style={{
              fontSize: "1.5rem",
              fontFamily: "Montserrat",
              marginTop: "8rem",
            }}
          >
            Welcome to the weather forecast web application. Please login with
            your Github account to use the application and view the weather in
            your city.
          </div>
          <div style={{ marginTop: "3rem" }}>
            <LoginButton />
          </div>
        </Cell>
      </Grid>
    </>
  );
}

export default Landing;
