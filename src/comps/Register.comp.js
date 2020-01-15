import React, { Component } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap'
import axios from 'axios';
export default class Register extends Component{
  constructor(props){
    super(props);
    this.onChangeName=this.onChangeName.bind(this);
    this.onChangeEmail=this.onChangeEmail.bind(this);
    this.onChangePassword=this.onChangePassword.bind(this);
    this.onChangePassword2=this.onChangePassword2.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
    this.state={
      name:'',
      email:'',
      password:'',
      password2:''
    }
  }
  onChangeName(e){
    this.setState({
      name:e.target.value,
    });
  }
  onChangeEmail(e){
    this.setState({
      email:e.target.value,
    });
  }
  onChangePassword(e){
    this.setState({
      password:e.target.value,
    });
  }
  onChangePassword2(e){
    this.setState({
      password2:e.target.value,
    });
  }
  onSubmit(e){
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
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email: </Form.Label>
            <Form.Control
              type="email"
              required
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password: </Form.Label>
            <Form.Control
              type="password"
              required
              value={this.state.password}
              onChange={this.onChangePassword}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password Repeat: </Form.Label>
            <Form.Control
              type="password"
              required
              value={this.state.password2}
              onChange={this.onChangePassword2}
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