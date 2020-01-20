import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/auth';
class Dashboard extends Component{
  onLogoutClick=e=>{
    e.preventDefault();
    this.props.logoutUser();
  }
  render(){
    return (
      <Row>
        <Col>Dashboard!</Col>
      </Row>
    )
  }
}
Dashboard.propTypes={
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}
const mapStateToProps=state=>({
  auth:state.auth
})
export default connect(
  mapStateToProps,
  {logoutUser}
)(Dashboard)