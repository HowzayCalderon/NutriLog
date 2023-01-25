import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateItem, getItem } from "../Services/Items.js" 
import { display } from "../Screens/Today.jsx";

export default function Input({ display }) {
  const [item, setItem] = useState({
    Name: "",
    Carbs: '',
    Fats: '',
    Proteins: '',
    Quantity: '',
    Calories: '',
    
    Carbs: undefined,
    Fats: undefined,
    Proteins: undefined,
    Quantity: undefined,
    Calories: undefined,
    Notes: ""
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
    await updateItem(id, item)
    navigate(`/items/${item.Name}`, { replace: true });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    // console.log(value, name)

    setItem((prev) => ({
      ...prev,
      [name]: value
    }))
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
        <button
          onClick={createItem}
          type="submit">Log your item!</button>
      </form>
    </div>
  )
}