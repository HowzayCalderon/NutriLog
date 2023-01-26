import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateItem, getItem } from "../../Services/Items.js";
import "../UpdateItem/UpdateItem.css"
import NavBar from "../../Components/NavBar/NavBar.jsx";

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
      <h1 className="Nurilog">Nutrilog</h1>
      <NavBar />
      <h1 className="title">Edit Item</h1>
      <form className="edit-form" onSubmit={handleSubmit}>
        <div className="input">
        <ul> Name: </ul>
        <input className="name"
          type="text"
          placeholder="Enter item: "
          name="Name"
          value={item.Name}
          onChange={handleChange}
        />
        <ul> Carbohydrates: </ul>
        <input
          type="number"
          placeholder="Carbs: "
          name="Carbs"
          value={item.Carbs}
          onChange={handleChange}
        />
        <ul> Fats: </ul>
        <input
          type="number"
          placeholder="Fats: "
          name="Fats"
          value={item.Fats}
          onChange={handleChange}
        />
        <ul> Protein: </ul>
        <input
          type="number"
          placeholder="Protein: "
          name="Proteins"
          value={item.Proteins}
          onChange={handleChange}
        />
        <ul> Quantity: </ul>
        <input
          type="number"
          placeholder="Quantity: "
          name="Quantity"
          value={item.Quantity}
          onChange={handleChange}
        />
        <ul> Calories: </ul>
        <input
          type="number"
          placeholder="Calories: "
          name="Calories"
          value={item.Calories}
          onChange={handleChange}
        />
        <ul> Notes: </ul>
        <input
          type="text"
          placeholder="Enter notes: "
          name="Notes"
          value={item.Notes}
          onChange={handleChange}
        />
        </div>
        <br></br>
        <button className='updateButton'onClick={() => updateItem()} type="submit">
          Update this item
        </button>
      </form>
    </div>
  );
}
