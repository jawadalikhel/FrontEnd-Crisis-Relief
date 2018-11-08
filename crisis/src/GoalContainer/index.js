import React, {Component} from 'react';
import CreateGoal from '../CreateGoal';
// import EditGoal from '../EditGoal';
// import GoalList from '../GoalList';

class GoalsContainer extends Component{
  constructor(){
    super();
    this.state = {
      goals: []
    }
  }

  addGoal = async (goal, e) =>{
    e.preventDefault();
    console.log(goal, ' THIS IS THE GOOOOAL')

    try {
      const createGoal = await fetch('http://localhost:9000/api/v1/goals', {
        method: 'POST',
        body: JSON.stringify(goal),
        headers: {
          'Content-Type': 'application/json',
        }
      });
    } catch (err) {
      console.log(err, 'Error in addGoal')
    }
  }

  render(){
    return(
      <div>
        is this working
        <CreateGoal addGoal={this.addGoal} />
      </div>
    )
  }
}

export default GoalsContainer;
