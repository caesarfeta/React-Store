import React, { Component } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap'
import axios from 'axios';
export default class Login extends Component{
  constructor(props){
    super(props);
    this.state={
      email:'',
      password:''
    }
  }
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  }
  onSubmit = e => {
    e.preventDefault();
    const user={
      email: this.state.email,
      password: this.state.password
    };
    axios.post('http://localhost:3001/users/login',user)
      .then(res=>console.log(res.data))
      .catch(err=>console.log(err));
  }
  render(){
    return (
      <>
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
              <Button type="submit">Login</Button>
          </Form.Group>
        </Form>
        </Col>
        </Row>
      </>
    )
  }
}