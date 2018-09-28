import React,{ Component }from 'react';
import { goalRef } from '../firebase'
import {connect} from 'react-redux'

class AddGoal extends Component {
  constructor(props){
    super(props);
    this.state = {
      title:''
    }
  }

  addGoal(){
    console.log('this',this);
    const { email } = this.props.user;
    const { title } = this.state;
    goalRef.push({email:email,title:title});
  }

  render(){
    return(
      <div className='form-inline'>
        <div className='form-group'>
          <input
            className='form-control'
            type='text'
            style={{'margin':'5px'}}
            placeholder='Add New Goal'
            onChange={event=>this.setState({title:event.target.value})}
          />
          <button className='btn btn-success'
            onClick={()=>this.addGoal()}>
            Submit
          </button>
        </div>
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

export default connect(mapStateToProps,null)(AddGoal);
