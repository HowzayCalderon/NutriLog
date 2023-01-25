import { useState, useEffect } from "react";
// import './ItemDetail.css'
import { getItem, deleteItem } from "../Services/Items.js";
import { useParams, Link, useNavigate } from "react-router-dom";

const ItemDetail = (props) => {
  const [item, setItem] = useState(null)

  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    fetchItem();
  }, [])

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
        <Link to={`/characters/${character._id}/edit`}>
          <button>Edit Character</button>
        </Link>
        <button onClick={handleDelete}>Destroy Item!</button>

      </div>

    </div>
  )
}
