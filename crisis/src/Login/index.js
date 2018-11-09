import React, {Component} from 'react';
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

  handleSubmit =(e) =>{
    e.preventDefault();
  }
  render(){
    return(
      <Form onSubmit={this.handleSubmit}>
        <Label>Username</Label>
        <Form.Input type='text' name="username" onChange={this.handleChange} />
        <Label>Password</Label>
        <Form.Input type='password' name="username" onChange={this.handleChange} />
        <Button type="Submit" color="green">Login</Button>
      </Form>
    )
  }
}

export default Login;
