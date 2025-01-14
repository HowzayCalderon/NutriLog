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

      {toggle ? (<InputModal setToggle={setToggle}/>
      ) : null}
     
     

      <div className="todaysEntry">
        <div className="categories">
          <h3 id="cat">Food Item</h3>
          <h3 id="cat">Carbohydrate (g)</h3>
          <h3 id="cat">Protein (g)</h3>
          <h3 id="cat">Fats (g)</h3>
          <h3 id="cat">Calories (kJ)</h3>
          <h3 id="cat">Quantity</h3>
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
                  <Link id="pencil" className="icon" to={`/items/${meal._id}`}><HiIcons.HiPencil /></Link>
                  <BiIcons.BiTrash
                    id="trash"
                    className="icon"
                    onClick={() => handleDelete(meal._id)}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}