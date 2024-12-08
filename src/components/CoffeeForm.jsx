import {coffeeOptions } from "../utils/index.js";
import {useState} from "react";

const CoffeeForm = () => {

    const [selectedCoffee , setselectedCoffee] = useState(null);
    const [showCoffeeState , setShowCoffeeState] = useState(false);
    return (
        <>
            <div className="section-header">
                <i class="fa-solid fa-pencil"></i>
                <h2>Start Tracking Now !</h2>
            </div>
            <h4>Select coffee type </h4>
            <div className="coffee-grid">
                {coffeeOptions.slice(0 , 5).map((option , optionIndex) => {
                    return (
                        <button key={optionIndex} className={"button-card " + (option.name) === selectedCoffee ? "coffee-button-selected" : ""} onClick={() => {
                            setselectedCoffee(option.name);
                        }}>
                            <h4>{option.name}</h4>
                            <p>{option.caffeine} mg</p>
                        </button>
                    )
                })}
                <button className="button-card" onClick={() => {
                    setShowCoffeeState(true);
                }}>
                    <h4>Other</h4>
                    <p>N/A</p>
                </button>
            </div>
            <select name="select-list" id="select-list">
                <option value="null">Select Type</option>
                {coffeeOptions.map((option , optionIndex) => {
                    return (
                        <option value={option.name} key={optionIndex}>
                            {option.name} ({option.caffeine}mg)
                        </option>
                    )
                })}
            </select>
            <h4>Add the cost ($)</h4>
            <input type="number" className="w-full" placeholder="4.50" />
            <h4>Time Since Consumption</h4>
            <div className="time-entry">
                <div>
                    <h6>Hours</h6>
                    <select id="hours-select">
                        {[0 ,1 ,2 , 3 ,4 ,5 ,6 ,7 ,8 ,9 ,10 , 11 ,12 ,13 ,14 ,15 ,16 ,17 ,18 , 19 ,20 , 21 ,22 ,23].map((hour , hourIndex) => {
                            return (
                                <option value={hour} key={hourIndex}>{hour}</option>
                            )
                        })}
                    </select>
                </div>
                <div>
                    <h6>Mins</h6>
                    <select id="mins-select">
                        {[0 ,5 ,10 , 15 ,30 ,45].map((mins , minsIndex) => {
                            return (
                                <option value={mins} key={minsIndex}>{mins}</option>
                            )
                        })}
                    </select>
                </div>
            </div>
            <button>
                <h4>Add Entry</h4>
            </button>
        </>
    )
}

export default CoffeeForm
