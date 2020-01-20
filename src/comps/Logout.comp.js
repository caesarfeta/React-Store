import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/auth';
class Logout extends Component{
  constructor(props){
    super(props);
    this.state={
      auth:''
    }
  }
  onLogoutClick=e=>{
    e.preventDefault();
    this.props.logoutUser();
  };
  render(){
    if (this.props.auth.isAuthenticated){
      return <Nav.Link onClick={this.onLogoutClick}>Logout</Nav.Link>
    }
    return <></>
  }
}
Logout.propTypes={
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}
const mapStateToProps=state=>({
  auth: state.auth
})
export default connect(
  mapStateToProps,
  {logoutUser}
)(Logout)