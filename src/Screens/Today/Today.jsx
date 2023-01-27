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
        <NavBar Today={"Today"} />
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
      {/* this is the wave at the bottom of the page */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a2d9ff" fill-opacity="1" d="M0,320L18.5,309.3C36.9,299,74,277,111,272C147.7,267,185,277,222,282.7C258.5,288,295,288,332,245.3C369.2,203,406,117,443,85.3C480,53,517,75,554,117.3C590.8,160,628,224,665,256C701.5,288,738,288,775,288C812.3,288,849,288,886,277.3C923.1,267,960,245,997,229.3C1033.8,213,1071,203,1108,213.3C1144.6,224,1182,256,1218,261.3C1255.4,267,1292,245,1329,218.7C1366.2,192,1403,160,1422,144L1440,128L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"></path></svg>
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
