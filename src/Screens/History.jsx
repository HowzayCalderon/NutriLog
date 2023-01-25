import NavBar from "../Components/NavBar.jsx"
import DisplayModal from "../Components/DisplayModal.jsx"

import { useEffect, useState } from "react"
import { getItems } from "../Services/items.js";



export default function History (){
    const [day, setDay] = useState ([{}]);
    const [pastItems, setPastItems] = useState (false);
    const [page, setPage] = useState (0);
    // const oneDay = 86400;
    // const today= newDate() == currentTimestamp;
    // const yesterday= newDate() - oneDay;
    // const aWeekAgo= newDate() - 8*day;
    // const fourWeeksAgo= newDate() - 29*oneDay; 
    

function apiCall (){
    fetch("https://nutritionx-app.herokuapp.com/items")
        .then ((res)=> res.json())
        .then((data)=> setDay(data));
}
useEffect(()=> {
    apiCall ();
}, []);


function display (){
    setPastItems((prev) => !prev);
}
function handleClick (pastItemInfo) {
    setPastItems (pastItemInfo);
    display();
}
    return(
        
        <div className= "History">
            < NavBar />
                <div className="information">
                        <h3> {day.Calories} </h3>
                    </div>
  item.Name = raw.Name;
  item.Calories = raw.Calories;
  item.Carbs = raw.Carbs;
  item.Fats = raw.Fats;
  item.Proteins = raw.Proteins;
  item.Quantity = raw.Quantity;
  item.Notes = raw.Notes;
        </div>
        
    )
};


// _id.timestamp() shows the date


//example code for dates, needs work
 // export default function showDays (){
    //     for (let i=0 ; i< Api.length; i ++){
    //         if (stuff[i].timestamp < yesterday && stuff[i].timestamp >= yesterday -1)
    //         push it in
    //         stuffByDate[0]
    //     }

    // }



//example code for only showing seven days per page
{/* <p className='items'>
                {day.slice(page, page + 7).map((day, index)=> (
                    <div className= "item-container" onClick ={() => handleClick (day)} key ={index} >
                        <div className="information">
                        <h3> {day.Calories} </h3>
                    </div>
                    </div> 
                ))}
            </p> 
        </div> */}


        {description ? (
            <div className="modal">
              <div className="modal-content">
                <div className="appearance">
                  <button className="modal-close-button"onClick={display}>Close</button>
                  <p>Gender- {character.appearance.gender}</p>
                  <p>Race- {character.appearance.race}</p>
                  <p>Height- {character.appearance.height}</p>
                </div>
                <p>Weight- {character.appearance.weight}</p>
                <p>Eye Color - {character.appearance.eyeColor}</p>
                <p>Hair Color - {character.appearance.hairColor}</p>
                
                <Link to={`/characters/${character.name}/edit`}>
                <button>Edit Character</button>
                </Link>
                <button onClick={handleDelete}>Destroy Character!</button>
    
              </div>
            </div>
          ) : null}