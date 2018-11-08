import React from 'react';

const Goals = (props) => {
  console.log(props, 'the is props in goallist')
  const goalsList = props.showGoal.map((goal, i) =>{
    return(
      <div key={goal._id}>
        <p>Name: {goal.name}</p>
        <p>Country: {goal.country}</p>
        <p>Crisis: {goal.crisis}</p>
      </div>
    )
  })
  return(
    <div>
      <h2>Goals List</h2>
      {goalsList}
    </div>
  )
}

export default Goals;
