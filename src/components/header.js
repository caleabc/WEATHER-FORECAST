// Libraries
import * as React from "react";

function Header() {
  return (
    <div
      style={{
        marginTop: "1rem",
      }}
    >
      <span
        style={{
          fontSize: "4rem",
          marginRight: "1rem",
          color: "gray",
        }}
      >
        <i className="bi bi-clouds"></i>
      </span>
      <span
        style={{
          fontFamily: "Montserrat",
          fontSize: "2rem",
          fontWeight: "900",
        }}
      >
        Weather Forecast
      </span>
    </div>
  );
}

export default Header;
