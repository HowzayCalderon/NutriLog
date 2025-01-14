import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createItem } from "../Services/Items.js";
import "./InputModal.css"

export default function InputModal( {setToggle} ) {
  const [item, setItem] = useState({
    Name: "",
    Carbs: "",
    Fats: "",
    Proteins: "",
    Quantity: "",
    Calories: "",
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
      <form className="create-form" onSubmit={handleSubmit}>
        <div className="modal-content">
        <input
          type="text"
          placeholder="Enter item "
          name="Name"
          value={item.Name}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Carbs "
          name="Carbs"
          value={item.Carbs}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Protein "
          name="Proteins"
          value={item.Proteins}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Fats "
          name="Fats"
          value={item.Fats}
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
          type="number"
          placeholder="Quantity "
          name="Quantity"
          value={item.Quantity}
          onChange={handleChange}
        />
        <input type="submit" value="Log your item" />

        <button onClick={() => setToggle()}>Close</button>
        
        </div>
      </form>
      
    </div>
    
  );
}
