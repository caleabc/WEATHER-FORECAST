// Libraries
import * as React from "react";
import { Grid, Cell } from "baseui/layout-grid";

// Component

function Landing() {
  return (
    <>
      <Grid>
        <Cell>
          <div style={{ fontFamily: "Montserrat" }}>Weather Forecast</div>
        </Cell>
      </Grid>
    </>
  );
}

export default Landing;
