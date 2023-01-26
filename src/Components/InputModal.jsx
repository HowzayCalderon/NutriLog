import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createItem } from "../Services/Items.js";

export default function InputModal({ display }) {
  const [item, setItem] = useState({
    Name: "",
    Carbs: "",
    Fats: "",
    Proteins: "",
    Quantity: "",
    Calories: "",
    Notes: "",
  });

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createItem(item);
    navigate("/today", { replace: true });
    window.location.reload();
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    setItem((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Item Create Screen</h1>
      <form className="create-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter item: "
          name="Name"
          value={item.Name}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Carbs: "
          name="Carbs"
          value={item.Carbs}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Fats: "
          name="Fats"
          value={item.Fats}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Protein: "
          name="Proteins"
          value={item.Proteins}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Quantity: "
          name="Quantity"
          value={item.Quantity}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Calories: "
          name="Calories"
          value={item.Calories}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter notes: "
          name="Notes"
          value={item.Notes}
          onChange={handleChange}
        />
        <button type="submit">
          Log your item!
        </button>
      </form>
    </div>
  );
}
