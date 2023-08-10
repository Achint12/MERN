import React from 'react';
import GoalList from './components/GoalList';
import './App.css';
import NewGoal from './components/NewGoal';


const App = () => {
  const courseGoals = [
    {id: "cg1",text: "Finish the course"},
    {id: "cg2",text: "Learn all about the course"},
    {id: "cg3",text: "Help other students"},
  ];
 
  const addGoalHandler = (newGoal) => {
    courseGoals.push(newGoal);
    
  }
 
 return <div className='course-goals'>
    <h2>Course Goals</h2>
    <NewGoal onAddGoal={addGoalHandler} />
   <GoalList goals= {courseGoals} />
  </div>;
};

export default App;
