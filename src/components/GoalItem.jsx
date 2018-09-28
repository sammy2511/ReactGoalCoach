import React,{ Component }from 'react';

class GoalItem extends Component {
render(){
  console.log(this.props);
  const { email,title} = this.props.goal;
  return(
    <div style={{margin:"5px"}}>
      <strong>{title}</strong>
      <span> Submitted by <em>{email}</em></span>
    </div>
  )
}
}

export default GoalItem;
