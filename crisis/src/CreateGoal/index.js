import React, {Component} from 'react';

class CreateGoal extends Component{
  constructor(){
    super();
    this.state = {
      name: '',
      country: '',
      crisis: '',
    }
  }

  updateGoal = (e) =>{
    this.setState({[e.currentTarget.name]: e.currentTarget.value})
  }

  render(){
    return(
      <form onSubmit={this.props.addGoal.bind(null, this.state)}>
        Name:    <input type='text' name='name' onChange={this.updateGoal} value={this.state.name} placeholder='Your name' /><br/>
        Country: <input type='text' name='country' onChange={this.updateGoal} value={this.state.country} placeholder='Country Name' /><br/>
        Crisis:  <input type='text' name='crisis' onChange={this.updateGoal} value={this.state.crisis} placeholder='Crisis' /><br/>
        <button>Add</button>
      </form>
    )
  }
}

export default CreateGoal;
