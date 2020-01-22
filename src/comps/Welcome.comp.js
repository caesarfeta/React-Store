import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import {
  connect
} from 'react-redux';
class Welcome extends Component{
  constructor(props){
    super(props);
    this.state={
      auth:''
    }
  }
  render(){
    return <>
      <ReactMarkdown source="*Welcome" />
    </>
  }
}
Welcome.propTypes={
  auth: PropTypes.object.isRequired
}
const mapStateToProps=state=>({
  auth: state.auth
})
export default connect(mapStateToProps)(Welcome)