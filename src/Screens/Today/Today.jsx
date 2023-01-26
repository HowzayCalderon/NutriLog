import NavBar from "../../Components/NavBar/NavBar.jsx";
import InputModal from "../../Components/InputModal.jsx";
import { useState, useEffect } from "react";
import { deleteItem, getItems} from "../../Services/Items.js";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../Today/Today.css";
import * as HiIcons from "react-icons/hi";
import * as BiIcons from "react-icons/bi";

export default function Today() {
  const [toggle, setToggle] = useState(false);
  const [todaysMeals, setTodaysMeals] = useState([]);

//   let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    async function fetchItems() {
      const allItems = await getItems();
      setTodaysMeals(allItems);
    }
    fetchItems();
  }, []);

  const display = () => {
    if (!toggle) return setToggle(true);
    return setToggle(false);
  };

  async function handleDelete(id) {
    await deleteItem(id);
    alert("item deleted");
    navigate("/today", { replace: true });
    window.location.reload();
  }

  return (
    <div>
      <NavBar />

      <h1>Today</h1>

      <BiIcons.BiAddToQueue className="icon" onClick={() => display()} />

      {toggle && <InputModal display={display} />}

      <div className="todaysEntry">
        {todaysMeals.map((meal) => {
          return (
            <>
              <h3 className="ListItem">
                {meal.Name}
                <Link to={`/items/${meal._id}`}>
                  <HiIcons.HiPencil className="icon" />
                </Link>
                <BiIcons.BiTrash
                  className="icon"
                  onClick={() => handleDelete(meal._id)}
                />
                <br></br>
                <h5>Calories: {meal.Calories}</h5>
                <h5>Carbs: {meal.Carbs} g</h5>
                <h5>Fats: {meal.Fats} g</h5>
                <h5>Protein: {meal.Protein} g</h5>
                <h5>Quantity: {meal.Quantity}</h5>
                <h5>Notes: {meal.Notes}</h5>
              </h3>
            </>
          );
        })}
      </div>
    </div>
  );
}

// // creates a date + time for current moment
// const date = new Date();

// // converts current date + time to milliseconds since Jan 1, 1970
// const now = date.getTime();

// // wrapper function that will return "today" at 12AM (00:00:00)
// function resetTime() {
//   date.setSeconds(0);
//   date.setMinutes(0);
//   date.setHours(0);
//   return date;
// }

// resetTime();

// // assigns "today" @ 12AM to variable
// const thisMorning = date.getTime();

// // adds 1 to the "date" of "today at 12AM", creating "tomorrow" @ 12AM
// date.setDate(date.getDate() + 1);

// // assigns the above to a variable
// const tomorrowMorning = date.getTime();

// // logic to begin to filter items to today page
// if (now > thisMorning && now < tomorrowMorning) {
// }
