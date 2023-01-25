import NavBar from "../Components/NavBar.jsx";
import InputModal from "../Components/InputModal.jsx";

import { useState, useEffect } from "react";

export default function Today() {
  const [toggle, setToggle] = useState(false);
  const [todaysMeals, setTodaysMeals] = useState([]);
  const [data, setData] = useState([{}]);

  const today = new Date();
  console.log(today);

  const display = () => {
    if (!toggle) return setToggle(true);
    return setToggle(false);
  };

  function apiCall() {
    fetch("https://nutritionx-app.herokuapp.com/items")
      .then((res) => res.json())
      .then((data) => setData(data));
  }

  useEffect(() => {
    apiCall();
  }, []);

  console.log(data);

  return (
    <div>
      <NavBar />

      <h1>Today</h1>
      <h1>{data[0]._id}</h1>

      <button onClick={() => display()}>New Log Entry</button>

      {toggle && <InputModal display={display} />}

      <div className="todaysEntry">
        <h3>{todaysMeals}</h3>
      </div>
    </div>
  );
}
