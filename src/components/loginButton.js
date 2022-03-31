// Libraries
import * as React from "react";
import { Button, KIND as BUTTONKIND } from "baseui/button";

function LoginButton(props) {
  return (
    <>
      <Button onClick={props.onClick} kind={BUTTONKIND.secondary}>
        <span style={{ fontSize: "1.5rem", marginRight: "1rem" }}>
          <i className="bi bi-github m-0"></i>
        </span>
        <span>Login with Github</span>
      </Button>
    </>
  );
}

export default LoginButton;
