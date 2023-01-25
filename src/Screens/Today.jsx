import NavBar from "../Components/NavBar.jsx";
import InputModal from "../Components/InputModal.jsx";
import { useState, useEffect } from "react";

export default function Today() {
  const [toggle, setToggle] = useState(false);
  const [todaysMeals, setTodaysMeals] = useState([]);

  const date = new Date();

  const now = date.getTime();

  function resetTime() {
    date.setSeconds(0)
    date.setMinutes(0)
    date.setHours(0)
    return date
  }

  resetTime()

  const thisMorning = date.getTime()

  date.setDate(date.getDate() + 1)

  const tomorrowMorning = date.getTime()

  if(now > thisMorning && now < tomorrowMorning){
    console.log(date.now())
  }

  const display = () => {
    if (!toggle) return setToggle(true);
    return setToggle(false);
  };

  function apiCall() {
    fetch();
  }

  useEffect(() => {}, []);

  return (
    <div>
      <NavBar />

      <h1>Today</h1>

      <button onClick={() => display()}>New Log Entry</button>

      {toggle && <InputModal display={display} />}

      <div className="todaysEntry">
        <h3>{todaysMeals}</h3>
      </div>
    </div>
  );
}
