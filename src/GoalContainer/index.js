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

  deleteGoal = async (id) =>{
    const deleteGoalResponse = await fetch('http://localhost:9000/api/v1/goals/' + id, {
      method: 'DELETE'
    });

    const deleteGoalParsed = await deleteGoalResponse.json();
     this.setState({goalsArr: this.state.goalsArr.filter((goal) => goal._id !== id )})
     console.log(deleteGoalParsed, ' response from express server deleteGoalParsed')
  }

  handleEditGoal = (e) =>{
    this.setState({
      goalToEdit: {
        ...this.state.goalToEdit,
        [e.currentTarget.name]: e.currentTarget.value
      }
    });
  }

  closeAndEdit = async (e) =>{
    e.preventDefault();
    try {
      const editResponse = await fetch('http://localhost:9000/api/v1/goals/' + this.state.goalToEdit._id, {
        method: 'PUT',
        body: JSON.stringify({
          name: this.state.goalToEdit.name,
          country: this.state.goalToEdit.country,
          crisis: this.state.goalToEdit.crisis,
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const editResponseParsed = await editResponse.json();
      const newGoalArrayWithEdit = this.state.goals.map((goal) =>{
        if(goal._id === editResponseParsed.data._id){
          goal = editResponseParsed.data
        }

        return goal
      });

      this.setState({
        showEditModal: false,
        goalsArr: newGoalArrayWithEdit
      });
      console.log(editResponseParsed, ' the parsed edit');
    } catch (err) {
      console.log(err, ' error in closeAndEdit')
    }
  }

  openAndEdit = (goalsFromTheList) =>{
    console.log(goalsFromTheList, ' goalsToEdit');

    this.setState({
      showEditModal: true,
      goalToEdit: {
        ...goalsFromTheList
      }
    })
  }


  render(){
    console.log(this.state, ' this is the data')
    return(
      <div>
        <h3>Add your goals</h3>
        <CreateGoal postGoal={this.addGoal} />
        <p>---------------------------------------</p>
        <h3>Your future goals</h3>
        <GoalList goals={this.state.goalsArr} deleteGoal={this.deleteGoal} openAndEdit={this.openAndEdit}/>


      </div>
    )
  }
}

export default GoalsContainer;
