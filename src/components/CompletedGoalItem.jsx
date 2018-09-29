import React,{ Component }from 'react';
import { completedGoalRef,goalRef } from '../firebase'
import {connect} from 'react-redux'

class CompletedGoalItem extends Component {


render(){
  console.log('this.props',this.props);
  const { email,title} = this.props.goal;
  const { completedBy } = this.props;
  return(
    <div style={{margin:"5px"}}>
      <strong>{title}</strong>
      <span style={{marginRight:'5px'}}> Submitted by <em>{email}</em></span>
      <span style={{marginRight:'5px',color:'green'}}> Completed by <em>{completedBy}</em></span>
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


export default connect(mapStateToProps,null)(CompletedGoalItem);
