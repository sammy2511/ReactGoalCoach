import React,{ Component }from 'react';
import { completedGoalRef,goalRef } from '../firebase'
import {connect} from 'react-redux'

class GoalItem extends Component {

  onGoalComplete(){
    //add completed goal to Database
    //add that goal to completed list
    console.log('this.props',this.props);
    const { user } = this.props;
    const { goal } = this.props;
    goalRef.child(goal.serverKey).remove();
    completedGoalRef.push({goal:goal,completedBy:user.email});
  }
render(){
  console.log('this.props',this.props);
  const { email,title} = this.props.goal;
  return(
    <div style={{margin:"5px"}}>
      <strong>{title}</strong>
      <span style={{marginRight:'5px'}}> Submitted by <em>{email}</em></span>
        <button
          className="btn btn-sm btn-primary"
          onClick = {() => this.onGoalComplete()}
          >
          Complete
        </button>
    </div>
  )
}
}

function mapStateToProps(state){
  const {user} = state;
  return {
    user
  }
}


export default connect(mapStateToProps,null)(GoalItem);
