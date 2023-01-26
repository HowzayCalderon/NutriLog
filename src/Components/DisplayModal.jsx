import { Link, useParams, useNavigate } from "react-router-dom";
import { deleteItem, getItem } from "../Services/Items.js";
import { useState, useEffect } from "react";
import * as FaIcons from "react-icons/fa";

export default function Display() {
  //modal edit/delete

  const [item, setItem] = useState({});

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
        <Link to={`items/${item._id}/edit`}>
          <button>Edit</button>
        </Link>
        <FaIcons.FaTrash onClick={handleDelete} />
      </div>
    </div>
  );
}
