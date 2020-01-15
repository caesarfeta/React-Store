import React, { Component } from 'react';
import { Alert, Button } from 'react-bootstrap';
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
      <Alert variant="danger">Error!
      <FaTimesCircle onClick={()=>this.close()}/>
      </Alert>
    )
  }
}