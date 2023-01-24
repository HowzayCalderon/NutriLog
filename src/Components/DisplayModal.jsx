import { Link, useParams, useNavigate } from "react-router-dom";
import { deleteItem, getItem } from "../Services/Nutrition.js";
import { useState, useEffect } from "react";


export default function Display() {

  const [item, setItem] = useState({})

  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    fetchItem();
  }, []);

  async function fetchItem() {
    let oneItem = await getItem(id);
    setItem(oneItem);
  }

  async function handleDelete() {
    await deleteItem(id);
    navigate("/items", { replace: true });
  }

  return (
    <div>
      <h2>{item.Name}</h2>
      <p>{item.Carbs}</p>
      <p>{item.Fats}</p>
      <p>{item.Proteins}</p>
      <p>{item.Quantity}</p>
      <p>{item.Calories}</p>
      <p>{item.Notes}</p>
      <div>
        {/* figure out link paths to use for edit character and handleDelete */}
        <Link to={`items/${item._id}/edit`}>
          <button>edit item</button>
        </Link>
        <button onClick={handleDelete}></button>
      </div>
    </div>
  )
}