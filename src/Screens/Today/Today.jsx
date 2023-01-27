import NavBar from "../../Components/NavBar/NavBar.jsx";
import InputModal from "../../Components/InputModal.jsx";
import { useState, useEffect } from "react";
import { deleteItem, getItems } from "../../Services/Items.js";
import { Link, useNavigate } from "react-router-dom";
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

  //modal
  function display() {
    console.log("clicked")
    setToggle((prev) => !prev);
  }
    //modal
  function handleClick(itemCreate) {
    setTodaysMeals(itemCreate);
    display();
  }

  // const display = () => {
  //   if (!toggle) return setToggle(true);
  //   return setToggle(false);
  // };

  async function handleDelete(id) {
    await deleteItem(id);
    alert("item deleted");
    navigate("/today", { replace: true });
    window.location.reload();
  }

  return (
    <div>
      <div className="nutrilog">
        <h1>NutriLog</h1>
      </div>
      <div className="navbar-container">
        <NavBar />
      </div>

      <button className="entry-btn" onClick={() => display()}>
        <BiIcons.BiAddToQueue  />
      </button>

      {toggle ? (<InputModal />
      ) : null}
     
     

      <div className="todaysEntry">
        <div className="categories">
          <h3 id="food-cat">Food Item</h3>
          <h3 id="carb-cat">Carbohydrate (g)</h3>
          <h3 id="pro-cat">Protein (g)</h3>
          <h3 id="fats-cat">Fats (g)</h3>
          <h3 id="cal-cat">Calories (kJ)</h3>
          <h3 id="quan-cat">Quantity</h3>
        </div>
        <div className="listItem-container">
          {todaysMeals.map((meal) => {
            return (
              <div className="ListItem" key={meal._id}>
                <h5 id="m-name">{meal.Name}</h5>
                <h5 id="m-carbs">{meal.Carbs}</h5>
                <h5 id="m-pro">{meal.Proteins}</h5>
                <h5 id="m-fats">{meal.Fats}</h5>
                <h5 id="m-cal">{meal.Calories}</h5>
                <h5 id="m-quan">{meal.Quantity}</h5>
                <div className="btn-tainer">
                  <Link id="pencil" className="icon" to={`/items/${meal._id}`}>
                    <HiIcons.HiPencil />
                  </Link>
                  <BiIcons.BiTrash
                    id="trash"
                    className="icon"
                    onClick={() => handleDelete(meal._id)}
                  />
                </div>
                {/* <h5>Notes: {meal.Notes}</h5> */}
              </div>
            );
          })}
        </div>
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
