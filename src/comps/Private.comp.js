import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../actions/auth';
class Authed extends Component{
  constructor(props){
    super(props);
    this.state={
      auth:''
    }
  }
  render(){
    if (this.props.auth.isAuthenticated){
      return <>{ this.props.children }</>
    }
    return <></>
  }
}
Authed.propTypes={
  auth: PropTypes.object.isRequired
}
const mapStateToProps=state=>({
  auth: state.auth
})
export default connect(
  mapStateToProps,
  {loginUser}
)(Authed)