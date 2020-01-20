import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/auth';
class Purchased extends Component{
  render(){
    return (
      <Row>
        <Col>Purchased!</Col>
      </Row>
    )
  }
}
Purchased.propTypes={
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}
const mapStateToProps=state=>({
  auth:state.auth
})
export default connect(
  mapStateToProps,
  {logoutUser}
)(Purchased)