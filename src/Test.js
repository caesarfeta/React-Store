import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' ;
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/auth';
import { Provider } from 'react-redux';
import store from './store';
import { Container } from 'react-bootstrap' ;
import LANav from "./comps/LANav.comp";
import PrivateRoute from "./comps/PrivateRoute.comp";
import Register from "./comps/Register.comp";
import Login from "./comps/Login.comp";
import Purchased from "./comps/Purchased.comp";
import Shop from "./comps/Shop.comp";
import Cart from "./comps/Cart.comp";
import Welcome from "./comps/Welcome.comp";
import './App.css';
if ( localStorage.jwtToken ){
  const token=localStorage.jwtToken;
  setAuthToken(token);
  const decoded=jwt_decode(token);
  store.dispatch(setCurrentUser(decoded));
  const currentTime=Date.now()/1000;
  if ( decoded.exp<currentTime ){
    store.dispatch(logoutUser());
    window.location.href="./login";
  }
}
class App extends Component{
  render(){
    return(
      <Provider store={store}>
      <Router>
        <Container>
          <LANav/>
          <br/>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/shop" component={Shop} />
            <Route path="/cart" component={Cart} />
            <PrivateRoute exact path="/purchased" component={Purchased} />
          </Switch>
        </Container>
      </Router>
      </Provider>
    );
  }
}
export default App;