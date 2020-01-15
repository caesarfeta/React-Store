import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap'
import axios from 'axios';
export default class CreateUser extends Component{
  constructor(props){
    super(props);
    this.onChangeUsername=this.onChangeUsername.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
    this.state={
      username:''
    }
  }
  onChangeUsername(e){
    this.setState({
      username:e.target.value
    });
  }
  onSubmit(e){
    e.preventDefault();
    const user={
      username: this.state.username
    };
    console.log(user);
    axios.post('http://localhost:3001/users/register',user)
      .then(res=>console.log(res.data))
      .catch(err=>console.log(err));
    this.setState({
      username:''
    });
  }
  render(){
    return (
      <>
        <h2>Create User</h2>
        <Form onSubmit={this.onSubmit}>
          <Form.Group>
            <Form.Label>Username: </Form.Label>
            <Form.Control
              type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </Form.Group>
          <Form.Group>
              <Button type="submit">Create User</Button>
          </Form.Group>
        </Form>
      </>
    )
  }
}