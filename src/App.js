import "./App.css";
import Main from "./Components/Main";
import User from "./Components/User";
import React, { useState, useEffect } from "react";

function App() {
  const [num, setNum] = useState(1);
  const [data, setData] = useState(1000);

  const [post, setPost] = useState();
  useEffect(() => {
    const url =
      "https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/202010030.json";
    fetch(url)
      .then((resp) => resp.json())
      .then((body) => {
        setPost(data);
        
      });
  }, []);
  fetch("https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json", {
    method: "PUT",
    body: JSON.stringify({ 202010030: data }),
  })
    .then((resp) => resp.json())
    .then((body) => {
      
    });

  function setCounter(val) {
    setData(val.target.value);
   
  }
  
  let maxlimit = data;
  const incCounter = () => {
    if (maxlimit === null || maxlimit === undefined) {
      maxlimit = 1000;
    }
    console.log("maxlimit", maxlimit);
    if (num == maxlimit) {
      alert("Highest value reached");
      setNum(1);
    } else {
      
      setNum(num + 1);
    }
  };
  const decCounter = () => {
    
    if (num === 0) {
      alert("Counter Value Cannot be less then 0");
    } else {
      
      setNum(num - 1);
      
    }
  };

  
  return (
    <>
      <Main
        incCounter={incCounter}
        decCounter={decCounter}
        setCounter={setCounter}
        num={num}
      />
      <br />
      <User number={maxlimit} />
    </>
  );
}

export default App;
