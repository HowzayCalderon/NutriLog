import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateItem, getItem } from "../services/Items.js";
//need to get an update file




export default function ItemEdit() {
  const [item, setItem] = useState({
    _id: "",
    name: "",
    calories: "",
    carbs: "",
    fats: "",
    proteins: "",
    quantity: "",
    notes: ""
  });

  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    fetchItem();
  }, []);

  async function fetchItem() {
    let oneItem = await getItem(id);
    setItem(oneItem);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateItem(id, item);
    navigate(`/items/${item._id}`, { replace: true });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    console.log(name, value)

    setItem((prev) => ({
      ...prev,
      [name]: value
    }))
  };

  return (
    <div>
      <h1>Character Create Screen</h1>
      <form className="create-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Please insert your ID"
          name="_id"
          value={item._id}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Please insert item Name"
          name="name"
          value={item.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Please insert Calories in grams"
          name="calories"
          value={item.calories}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Please insert carbs in grams"
          name="carbs"
          value={item.carbs}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Please insert fats in grams"
          name="fats"
          value={item.fats}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Please insert protien"
          name="protein"
          value={item.proteins}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Please insert the quantity of the item"
          name="quantity"
          value={item.quantity}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Please insert any Notes"
          name="notes"
          value={item.notes}
          onChange={handleChange}
        />
        <button type="submit">Edit Your item!!!</button>
      </form>
    </div>
  );
}