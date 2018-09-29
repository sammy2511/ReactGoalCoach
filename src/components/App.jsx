import React,{ Component }from 'react';
import {connect} from 'react-redux';
import {firebaseApp} from '../firebase';
import AddGoal from './AddGoal'
import GoalList from './GoalList'
import CompletedGoalList from './CompletedGoalList'

class App extends Component{



  signOut(){
    firebaseApp.auth().signOut().then(() => {
        console.log('Sign out Succesfull');
    })
    .catch((error) => {

    });
  }

  render(){
    return(
      <div style={{margin:'5px'}}>
        <h3>Goal Coach</h3>
        <AddGoal/>
        <hr />
        <h4>Goal List</h4>
        <GoalList />

          <hr />
          <CompletedGoalList />
          <button
            className="btn btn-danger"
            onClick = {() => this.signOut()}
            >
              Sign Out
            </button>
      </div>
    );
  }
}

//radiant-badlands-12813

function mapStateToProps(state){
  console.log('state',state);
  return {};
}

export default connect(mapStateToProps,null)(App);
