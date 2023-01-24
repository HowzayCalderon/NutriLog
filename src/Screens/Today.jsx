import NavBar from '../Components/NavBar.jsx'
import InputModal from '../Components/InputModal.jsx'
import { useState, useEffect } from "react";

export default function Today() {
    const [todaysMeals, setTodaysMeals] = useState([]);
    const [toggle, setToggle] = useState(false);

    const display = () => {
        if (!toggle) return setToggle(true);
        return setToggle(false)
    }
    
    // useEffect(() => {
    //     fetchTodaysMeals(), []
    // })
    
    return (
        <>
        <NavBar />
    
        <h1>Today</h1>
    
        <button onClick={() => display()}>New Log Entry</button>
    
            {(toggle && (
                <InputModal display={display}/>
            ))}
        
        <div className="todaysEntry">
        </div>
        </>
    )
}
