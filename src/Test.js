import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom' ;
import 'bootstrap/dist/css/bootstrap.min.css';
import LANav from "./comps/LANav.comp";
import CreateUser from "./comps/CreateUser.comp";
function App(){
  return(
    <Router>
      <div className="container">
        <LANav/>
        <br/>
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}
export default App;