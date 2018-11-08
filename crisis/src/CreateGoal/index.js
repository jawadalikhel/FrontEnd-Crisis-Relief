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

  handleChange = (e) =>{
    this.setState({[e.currentTarget.name]: e.currentTarget.value})
  }

  render(){
    return(
      <form onSubmit={this.props.postGoal.bind(null, this.state)}>
        Name:    <input type='text' name='name' value={this.state.name} onChange={this.handleChange}  placeholder='Your name' /><br/>
        Country: <input type='text' name='country' value={this.state.country} onChange={this.handleChange}  placeholder='Country Name' /><br/>
        Crisis:  <input type='text' name='crisis' value={this.state.crisis} onChange={this.handleChange} placeholder='Crisis' /><br/>
        <button type='Submit'>Submit</button>
      </form>
    )
  }
}

export default CreateGoal;
