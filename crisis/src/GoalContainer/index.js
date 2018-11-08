import React, {Component} from 'react';
import CreateGoal from '../CreateGoal';
// import EditGoal from '../EditGoal';
import GoalList from '../GoalList';

class GoalsContainer extends Component{
  constructor(){
    super();
    this.state = {
      goalsArr: []
    }
  }

  getGoals = async () =>{
    // try {
      const goals = await fetch('http://localhost:9000/api/v1/goals');
      const goalsParsedJSON = await goals.json();
      return goalsParsedJSON;
    // } catch (err) {
      // console.log(err, ' error in getGoals');
    // }
  }

  componentDidMount(){
    this.getGoals().then((goals) =>{
      console.log(goals, ' theis is the data')
      this.setState({goalsArr: goals.data})
    }).catch((err) => {
      console.log(err, ' error in componentDidMount')
    })
  }

  addGoal = async (goal, e) => {
    e.preventDefault();
    console.log(goal, ' THIS IS THE GOOOOAL')

    try {
      const createGoal = await fetch('http://localhost:9000/api/v1/goals', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(goal),
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const parsedResponse = await createGoal.json();
      console.log(parsedResponse, ' this is the parsedResponse')
      this.setState({goalsArr: [...this.state.goalsArr, parsedResponse.data]})

      } catch (err) {
      console.log(err, 'Error in addGoal container')
    }
  }

  render(){
    console.log(this.state, ' this is the data')
    return(
      <div>
        <h3>Add your goals</h3>
        <CreateGoal postGoal={this.addGoal} />
        <p>---------------------------------------</p>
        <h3>Your future goals</h3>
        <GoalList showGoal={this.state.goalsArr}/>

      </div>
    )
  }
}

export default GoalsContainer;
