import React, { Component } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap'
import axios from 'axios';
export default class Login extends Component{
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
    axios.post('http://localhost:3001/users/login',user)
      .then(res=>console.log(res.data))
      .catch(err=>console.log(err));
    this.setState({
      username:''
    });
  }
  render(){
    return (
      <>
        <h2>Login</h2>
        <Row>
        <Col sm={12} md={6}>
        <Form onSubmit={this.onSubmit}>
          <Form.Group>
            <Form.Label>Name: </Form.Label>
            <Form.Control
              type="text"
              required
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password: </Form.Label>
            <Form.Control
              type="password"
              required
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