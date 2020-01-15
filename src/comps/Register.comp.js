import React, { Component } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap'
import axios from 'axios';
export default class Register extends Component{
  constructor(){
    super();
    this.state={
      name:'',
      email:'',
      password:'',
      password2:''
    }
  }
  onChange = e => {
    console.log( e )
    this.setState({ [e.target.id]: e.target.value });
  }
  onSubmit = e => {
    e.preventDefault();
    const user={
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password
    };
    axios.post('http://localhost:3001/users/register',user)
      .then(res=>console.log(res.data))
      .catch(err=>console.log(err));
  }
  render(){
    return (
      <>
        <h2>Register</h2>
        <Row>
        <Col sm={12} md={6}>
        <Form onSubmit={this.onSubmit}>
          <Form.Group>
            <Form.Label>Name: </Form.Label>
            <Form.Control
              type="text"
              required
              id="name"
              value={this.state.name}
              onChange={this.onChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email: </Form.Label>
            <Form.Control
              type="email"
              required
              id="email"
              value={this.state.email}
              onChange={this.onChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password: </Form.Label>
            <Form.Control
              type="password"
              required
              id="password"
              value={this.state.password}
              onChange={this.onChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password Repeat: </Form.Label>
            <Form.Control
              type="password"
              required
              id="password2"
              value={this.state.password2}
              onChange={this.onChange}
            />
          </Form.Group>
          <Form.Group>
              <Button type="submit">Create User</Button>
          </Form.Group>
        </Form>
        </Col>
        </Row>
      </>
    )
  }
}