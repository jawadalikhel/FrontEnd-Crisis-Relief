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
      <div className="createGoal">
        <div className='goals'>
          <form class='ui form goals' onSubmit={this.props.postGoal.bind(null, this.state)}>
            <div class='field'>
              Name:    <input type='text' name='name' value={this.state.name} onChange={this.handleChange}  placeholder='Your name' /><br/>
              <div class='ui pointing label'>Please enter a value</div>
            </div>

            <div class='field'>
              Country: <input type='text' name='country' value={this.state.country} onChange={this.handleChange}  placeholder='Country Name' /><br/>
              <div class='ui pointing label'>Please enter a value</div>
            </div>

            <div class='field'>
              Crisis:  <input type='text' name='crisis' value={this.state.crisis} onChange={this.handleChange} placeholder='Crisis' /><br/>
              <div class='ui pointing label'>Please enter a value</div>
            </div>

            <div class='field'>
              How Can you help:  <input type='text' name='help' value={this.state.help} onChange={this.handleChange} placeholder='How can you help?' /><br/>
              <div class='ui pointing label'>Please enter a value</div>
            </div>

            <button type='Submit'>Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default CreateGoal;
