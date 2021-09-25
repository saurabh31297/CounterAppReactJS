import React from "react";

export default function Main(props) {
  let extra = {
    margin: "auto",
    border: "dotted 1px black",
    padding: "40px",
    textAlign: "center",
    height: "100%",
    width: "20%",
  };
  const button1 = {
    color: "red",
    background: "grey",
    textAlign: "center",
    padding: "7px 15px",
  };
  const button2 = {
    color: "red",
    textAlign: "center",
    padding: "7px 15px",
    background: "pink",
    margin: "5px 0px",
  };
  const textbox = {
    width: "15%",
    textAlign: "center",
    height: 26,
  };

  return (
    <>
      <div className="container">
        <h1>FrontEnd Task</h1>
      </div>
      <body>
        <div style={extra}>
          <label htmlFor="label">Saving Counter Value</label>
          <br />

          <button style={button1} onClick={() => {
            props.decCounter()
            }}>
            -
          </button>

          <input
            type="Number"
            style={textbox}
            onChange={props.setCounter}
            placeholder={props.num}
          />

          <button style={button2} onClick={props.incCounter}>
            +
          </button>
        </div>
      </body>
    </>
  );
}
