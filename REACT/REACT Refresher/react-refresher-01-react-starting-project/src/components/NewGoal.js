import react from "react";
import './NewGoal.css';

const NewGoal = () => {
const addGoalHandler= event =>{
event.preventDefault();

const newGoal ={
    id: Math.random().toString(),
    text: "My new goal"
}
};
    
    return <form className="new-goal" onSubmit={addGoalHandler}> 
        <input type="text"/>
        <button type="Submit">Add Goal</button> 
    </form>
};
export default NewGoal;
