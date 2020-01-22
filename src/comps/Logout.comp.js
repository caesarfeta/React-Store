import React, { Component } from 'react';
import {
  Nav,
  OverlayTrigger,
  Tooltip
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/auth';
import {
  FaSignOutAlt
} from 'react-icons/fa';
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
      return <>
      <OverlayTrigger
        placement="right"
        overlay={
          <Tooltip
            id="tooltip-signout">
            Logout
          </Tooltip>
        }>
          <Nav.Link onClick={this.onLogoutClick}><FaSignOutAlt/></Nav.Link>
      </OverlayTrigger>
      </>
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