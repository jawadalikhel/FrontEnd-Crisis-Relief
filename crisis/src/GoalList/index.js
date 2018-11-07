import React, {Component} from 'react';

const Goals = ({showGoal}) => {
  const goalsList = showGoal.length ? (
    showGoal.map(showGoal =>{
      return(
        <div key={showGoal.id}>
          <p><b>Name:</b> {showGoal.name}</p>
          <p><b>Country:</b> {showGoal.country}</p>
          <p><b>Crisis:</b> {showGoal.crisis}</p>
        </div>
      )
    })
  ) : (
    <p>You dont have any goal list for any countries</p>
  )
  return(
    <div>
      <h2>Goals List</h2>
      {goalsList}
    </div>
  )
}

export default Goals;
