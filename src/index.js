import React from 'react';
import ReactDOM from 'react-dom';
import { Router,Route } from 'react-router'
import {createBrowserHistory} from 'history'
import { Provider } from 'react-redux'
import {createStore} from 'redux'
import reducer from './reducer'

import App from './components/App'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import {firebaseApp} from './firebase'
import {LogUser} from './actions'

const history = createBrowserHistory();
const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged(user =>{
  if(user){
    console.log('User is signed in or up',user);
    const {email} = user;
    store.dispatch(LogUser(email));
    history.push('/app');
  }else {
    console.log('User is signed out or nedds to sign up');
    history.replace('/signin');
  }
});


ReactDOM.render(
  <Provider store = {store}>
    <Router history={history}>
      <div>
        <Route path='/app' component={App} />
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
      </div>
    </Router>
  </Provider>,document.getElementById("root")

)
