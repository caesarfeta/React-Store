import React, { Component } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerUser } from '../actions/auth';
import classnames from 'classnames';
import axios from 'axios';
class Register extends Component{
  constructor(){
    super();
    this.state={
      email:'',
      password:'',
      password2:'',
      errors:{}
    }
  }
  componentWillReceiveProps(nextProps){
    if (nextProps.erros){
      this.setState({
        errors: nextProps.errors
      })
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
    this.props.registerUser( user, this.props.history );
    /*
    axios.post('http://localhost:3001/users/register',user)
      .then(res=>console.log(res.data))
      .catch(err=>console.log(err));
    */
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
              error={this.state.errors.email}
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
              error={this.state.errors.password}
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
              error={this.state.errors.password2}
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
Register.propTypes={
  registerUser:PropTypes.func.isRequired,
  auth:PropTypes.object.isRequired,
  errors:PropTypes.object.isRequired
}
const mapStateToProps=state=>({
  auth:state.auth,
  errors:state.errors
})
export default connect(
  mapStateToProps,
  {registerUser}
)(withRouter(Register))
