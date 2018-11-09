import React, {Component} from 'react';
import '../App.css';
import { Form, Label, Button} from 'semantic-ui-react';

class Login extends Component{
  constructor(){
    super();
    this.state = {
      username: '',
      password: '',
    }
  }
  handleChange = (e) =>{
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  }

  handleSubmit = async (e) =>{
    e.preventDefault();
    const loginResponse = await fetch ('http://localhost:9000/auth', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const parsedResponse = await loginResponse.json();

    if(parsedResponse.data === 'login successful'){
      // change our component
      console.log('succes login')
      this.props.history.push('/goals')
    }
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit} className='nav'>
        <Label>Username</Label>
        <input type='text' name="username" onChange={this.handleChange} />
        <Label>Password</Label>
        <input type='password' name="username" onChange={this.handleChange} />
        <Button type="Submit" color="green">Login</Button>
      </form>
    )
  }
}

export default Login;
