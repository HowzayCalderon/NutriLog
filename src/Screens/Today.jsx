import NavBar from '../Components/NavBar.jsx';
import InputModal from '../Components/InputModal.jsx';
import { useState, useEffect } from "react";

export default function Today() {
    const [toggle, setToggle] = useState(false);
    const [todaysMeals, setTodaysMeals] = useState([]);


    const display = () => {
        if (!toggle) return setToggle(true);
        return setToggle(false)
    }

    // useEffect(() => {
        
    // })

    return (
        <div>
        <NavBar />

        <h1>Today</h1>

        <button onClick={() => display()}>New Log Entry</button>

            {toggle && (
                <InputModal display={display}/>
            )}
        
        <div className="todaysEntry">
        </div>
        </div>
        )

            }