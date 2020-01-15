import React, { Component } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap'
import axios from 'axios';
export default class Register extends Component{
  constructor(){
    super();
    this.state={
      email:'',
      password:'',
      password2:''
    }
  }
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  }
  onSubmit = e => {
    e.preventDefault();
    const user={
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
        <p>Already have an account? <a href="/login">Login</a></p>
        <Row>
        <Col sm={12} md={6}>
        <Form onSubmit={this.onSubmit}>
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
              <Button type="submit">Create Account</Button>
          </Form.Group>
        </Form>
        </Col>
        </Row>
      </>
    )
  }
}