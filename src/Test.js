import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom' ;
import { Provider } from 'react-redux';
import store from './store';
import { Container } from 'react-bootstrap' ;
import 'bootstrap/dist/css/bootstrap.min.css';
import LANav from "./comps/LANav.comp";
import Register from "./comps/Register.comp";
import Login from "./comps/Login.comp";
class App extends Component{
  render(){
    return(
      <Provider store={store}>
      <Router>
        <Container>
          <LANav/>
          <br/>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Container>
      </Router>
      </Provider>
    );
  }
}
export default App;