import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom' ;
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./comps/Navbar.comp";
import ExerciseList from "./comps/ExerciseList.comp";
import EditExercises from "./comps/EditExercises.comp";
import CreateExercise from "./comps/CreateExercise.comp";
import CreateUser from "./comps/CreateUser.comp";
function App(){
  return(
    <Router>
      <div className="container">
        <Navbar/>
        <br/>
        <Route path="/" exact component={ExerciseList} />
        <Route path="/edit/:id" component={EditExercises} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}
export default App;