import React from 'react';
import Tasks from './Tasks';
import { AddTasks } from './AddTasks';
import { completeTask, deleteTask } from '../../Redux/Reducer/actions';
import { connect, useSelector } from 'react-redux';

export const Components = () => {
  const tasks = useSelector(state => state.tasks);

  return (
    <div className="App">
        <AddTasks />
        <Tasks tasks={ tasks } />
    </div>
  );
}


// class Components extends React.Component {

//   handleDelete = (id) => {
//     this.props.deleteTask(id);
//   }

//   handleComplete = (id) => {
//     this.props.completeTask(id)
//   }

//   render() {
//     return (
//       <div className="App">
//         <AddTasks />
//         <Tasks tasks={ this.props.tasks } deleteTask={this.handleDelete} completeTask={this.handleComplete} />
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     tasks: state.tasks
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     deleteTask: (id) => { dispatch(deleteTask(id)) },
//     completeTask: (id) => { dispatch(completeTask(id))}
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Components)