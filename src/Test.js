import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom' ;
import { Container } from 'react-bootstrap' ;
import 'bootstrap/dist/css/bootstrap.min.css';
import LANav from "./comps/LANav.comp";
import Register from "./comps/Register.comp";
import Login from "./comps/Login.comp";
function App(){
  return(
    <Router>
      <Container>
        <LANav/>
        <br/>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Container>
    </Router>
  );
}
export default App;