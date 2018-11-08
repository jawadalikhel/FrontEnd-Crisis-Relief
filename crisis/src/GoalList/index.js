import React from 'react';

const Goals = (props) => {
  console.log(props, 'the is props in goallist')
  const goalsList = props.showGoal.map((goal, i) =>{
    return(
      <div key={goal._id}>
        <div>
          <div>
            Name: {goal.name}<br/>
            Country: {goal.country}<br/>
            Crisis: {goal.crisis}<br/> <br/> 
          </div>

        </div>

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
