import React from 'react';
import Tasks from './Tasks';
import AddTasks from './AddTasks';
import { connect } from 'react-redux';

class Components extends React.Component {

  handleDelete = (id) => {
    this.props.deleteTask(id);
  }

  handleComplete = (id) => {
    this.props.completeTask(id)
  }

  render() {
    return (
      <div className="App">
        <AddTasks />
        <Tasks tasks={ this.props.tasks } deleteTask={this.handleDelete} completeTask={this.handleComplete} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTask: (id) => { dispatch({type: 'DELETE_TASK', id: id }) },
    completeTask: (id) => { dispatch({ type: 'COMPLETE_TASK', id: id })}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Components)