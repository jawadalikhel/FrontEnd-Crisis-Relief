import React, {Component} from 'react';
import CreateGoal from '../CreateGoal';
import EditGoal from '../EditGoal';
import GoalList from '../GoalList';

class GoalsContainer extends Component{
  constructor(){
    super();
    this.state = {
      goalsObj: [
        {name: 'Dawaj', country: 'Mali', crisis:'Flood', helped: true}
      ]
    }
  }

  addGoal = (goal) =>{
    goal.id = Math.random();
    const newGoal = [...this.state.goalsObj, goal];
    this.setState({
      goalsObj: newGoal,
    })
  }

  render(){
    console.log(this.state.goalsObj, ' <--- this is goalsObj data')
    return(
      <div>
        <h1>Goals Container</h1>
        <CreateGoal />
        <p>-------------------------------</p>
        <EditGoal />
        <p>-------------------------------</p>
        <GoalList showGoal={this.state.goalsObj}/>
      </div>
    )
  }
}

export default GoalsContainer;
