import React,{ Component }from 'react';
import {firebaseApp} from '../firebase'
import { Link } from 'react-router-dom'

class SignIn extends Component{
  constructor(props){
    super(props);
    this.state = {
      email:'',
      password:'',
      error:{
        message:''
      }
    }
  }


  signIn(){
    console.log(this.state);
    const {email,password} = this.state;
    firebaseApp.auth().signInWithEmailAndPassword(email, password).catch((error) => {
      this.setState({error});
    });
  }

  render(){
    return(
      <div className="form-inline" style = {{margin:'5%'}}>
        <h2>SignIn Form</h2>
        <div className="form-group">
          <input
            className="form-control"
            type = "text"
            placeholder="Email"
            style = {{marginRight:'5px'}}
            onChange = {event => this.setState({email:event.target.value})}
          />
          <input
            className="form-control"
            type = "password"
            placeholder="Password"
            style = {{marginRight:'5px'}}
            onChange = {event => this.setState({password:event.target.value})}
          />
          <button
            className="btn btn-primary"
            type="button"
            onClick = {() => this.signIn()}
            >
              Sign In
            </button>
        </div>
        <div>{this.state.error.message}</div>
        <div><Link to='/signup'>New Here? Sign Up</Link></div>
      </div>
    );
  }
}

export default SignIn;
