import { getByDisplayValue } from "@testing-library/react";
import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import NavBar from "../../Components/NavBar";

function History() {
  const [day, setDay] = useState([{}]);

  function apiCall() {
    fetch("https://nutritionx-app.herokuapp.com/items")
      .then((res) => res.json())
      .then((data) => setDay(data));
  }
  useEffect(() => {
    apiCall();
  }, []);
  console.log(day);

  return (
    <div>
      <NavBar />
      <p>{day[0].Name}</p>
    </div>
  );
}

export default History;
