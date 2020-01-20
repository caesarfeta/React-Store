import React, { Component } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../actions/auth';
class Login extends Component{
  constructor(props){
    super(props);
    this.state={
      email:'',
      password:'',
      errors:{}
    }
  }
  componentWillReceiveProps(nextProps){
    if (nextProps.auth.isAuthenticated){
      this.props.history.push('/shop');
    }
    if (nextProps.errors){
      this.setState({
        errors:nextProps.errors
      })
    }
  }
  componentDidMount(){
    if (this.props.auth.isAuthenticated){
      this.props.history.push("/shop");
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
    this.props.loginUser(user);
  }
  render(){
    const {errors}=this.state;
    return (
      <>
        <p>Need an account? <a href="/register">Register</a></p>
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
              isInvalid={errors.email||errors.emailnotfound}
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
              isInvalid={errors.password||errors.passwordincorrect}
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
Login.propTypes={
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}
const mapStateToProps=state=>({
  auth: state.auth,
  errors: state.errors
})
export default connect(
  mapStateToProps,
  {loginUser}
)(Login)