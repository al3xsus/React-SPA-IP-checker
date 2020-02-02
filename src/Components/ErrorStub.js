import React from "react";

const ErrorStub = (props) => {
  return (<div className="App">
    <p>
      {props.message}
      <br/>
      Try to check your network status or disable ad-blocker
    </p>
  </div>)
};

export default ErrorStub