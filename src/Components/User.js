import React from "react";

export default function User(props) {
  let extra = {
    margin: "auto",
    border: "dotted 1px black",
    padding: "30px",
    textAlign: "left",
    height: "10%",
    width: "20%",
  };

  return (
    <>
      <center>
        <div style={extra}>
          <h2>Counter Value</h2>

          <label>{props.number}</label>
        </div>
      </center>
    </>
  );
}
