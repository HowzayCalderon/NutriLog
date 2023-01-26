import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateItem, getItem } from "../../Services/Items.js";

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

  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    fetchItem();
  }, []);

  async function fetchItem() {
    let oneItem = await getItem(id);
    setItem(oneItem);
  }

  console.log(item);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateItem(id, item);
    navigate("/today", { replace: true });
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
      <h1>Edit Item</h1>
      <form className="edit-form" onSubmit={handleSubmit}>
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
        <button onClick={() => updateItem()} type="submit">
          Update this item
        </button>
      </form>
    </div>
  );
}
