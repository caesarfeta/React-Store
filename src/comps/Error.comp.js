import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';
import { FaTimesCircle } from 'react-icons/fa';
export default class Error extends Component{
  constructor(props){
    super(props);
    this.close=this.close.bind(this);
  }
  close(){
    console.log('close')
  }
  render(){
    return (
      <Alert variant="danger">
      <FaTimesCircle onClick={()=>this.close()}/>
      Error!
      </Alert>
    )
  }
}