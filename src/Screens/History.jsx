import NavBar from "../Components/NavBar.jsx"
import DisplayModal from "../Components/DisplayModal.jsx"

import { useEffect, useState } from "react"
import { getItems } from "../Services/items.js";



export default function History (){
    const [item, setItem] = useState ([]);
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
        .then((data)=> setItem(data));
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
    // export default function showDays (){
    //     for (let i=0 ; i< Api.length; i ++){
    //         if (stuff[i].timestamp < yesterday && stuff[i].timestamp >= yesterday -1)
    //         push it in
    //         stuffByDate[0]
    //     }

    // }


    return(
        
        <div className= "History">
            < NavBar />
            <p className='items'>
                {item.slice(page, page + 7).map((item, index)=> (
                    <div className= "item-container" onClick ={() => handleClick (item)} key ={index} >

                    </div>
                ))}

            </p>


        </div>
        
    )
};


// _id.timestamp() shows the date