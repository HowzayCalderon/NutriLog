import NavBar from "../Components/NavBar.jsx";
import InputModal from "../Components/InputModal.jsx";
import { useState, useEffect } from "react";
import { deleteItem, getItems } from "../Services/Items.js";
import { useNavigate } from "react-router-dom";

export default function Today() {
  const [toggle, setToggle] = useState(false);
  const [todaysMeals, setTodaysMeals] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    async function fetchItems() {
      const allItems = await getItems();
      setTodaysMeals(allItems);
    }
    fetchItems();
  }, []);

  // creates a date + time for current moment
  const date = new Date();

  // converts current date + time to milliseconds since Jan 1, 1970
  const now = date.getTime();

  // wrapper function that will return "today" at 12AM (00:00:00)
  function resetTime() {
    date.setSeconds(0);
    date.setMinutes(0);
    date.setHours(0);
    return date;
  }

  resetTime();

  // assigns "today" @ 12AM to variable
  const thisMorning = date.getTime();

  // adds 1 to the "date" of "today at 12AM", creating "tomorrow" @ 12AM
  date.setDate(date.getDate() + 1);

  // assigns the above to a variable
  const tomorrowMorning = date.getTime();

  // logic to begin to filter items to today page
  if (now > thisMorning && now < tomorrowMorning) {
  }

  const display = () => {
    if (!toggle) return setToggle(true);
    return setToggle(false);
  };

  async function handleDelete() {
    await deleteItem(todaysMeals[5]._id);
    alert("item deleted")
    navigate("/today", { replace: true });
    window.location.reload();
  }

  return (
    <div>
      <NavBar />

      <h1>Today</h1>

      <button onClick={() => display()}>New Log Entry</button>

      {toggle && <InputModal display={display} />}

      <div className="todaysEntry">
        {todaysMeals.map((meal) => {
          
          return (
          <>
          <p>
            {meal.Name}
            <button>Edit</button>
            <button onClick={() => handleDelete()}>Delete</button>
            </p>
          </>
          )
        })}
      </div>
    </div>
  );
}
