import React,{ Component }from 'react';
import { completedGoalRef } from '../firebase';
import {setCompleted} from '../actions';
import {connect} from 'react-redux';
import CompletedGoalItem from  './CompletedGoalItem'

class CompletedGoalList extends Component {

  componentDidMount(){
    completedGoalRef.on('value',snap => {
      let completedGoals = [];
      snap.forEach(completeGoal =>{
        const { completedBy, goal } = completeGoal.val();
        //console.log('completedBy',completedBy, 'goal',goal);
        completedGoals.push({completedBy:completedBy,goal:goal});
      })
      this.props.setCompleted(completedGoals);
    })
  }

  clearAll(){
    completedGoalRef.set([]);
  }

  render(){
    //console.log('this.props.compgoals',this.props.compgoals);
    return (
        <div>{
          this.props.compgoals.map((compgoal,index) =>{
            return(

                  <CompletedGoalItem key={index} goal = {compgoal.goal} completedBy = {compgoal.completedBy}/>
            )
          })
        }
        <button
          className = "btn btn-primary"
          onClick = {() => this.clearAll()}
          >Clear All</button>
      </div>

    )
  }
}

function mapStateToProps(state){
  const {compgoals} =state;
  return {
    compgoals
  }
}


export default connect(mapStateToProps,{setCompleted})(CompletedGoalList);
