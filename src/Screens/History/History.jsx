import React from "react";
import { useEffect, useState } from "react";
import NavBar from "../../Components/NavBar/NavBar.jsx";

function History() {
  const [day, setDay] = useState([{}]);

  function apiCall() {
    fetch("https://nutritionx-app.herokuapp.com/items")
      .then((res) => res.json())
      .then((data) => setDay(data));
  }
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.replace("https://reposfit.netlify.app/");}, 1000);

      return () => clearTimeout(timeout);
    }, []);

  return (
    <div>
      <NavBar History={"History"} />
      <p>{day[0].Name}</p>
    </div>
  );
}

export default History;
