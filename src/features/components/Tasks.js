import React from 'react';
import { completeTask, deleteTask } from '../../Redux/Reducer/actions';
import { useDispatch, useSelector } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Button from 'react-bootstrap/Button';
import './Tasks.css'

const Tasks = ({tasks}) => {

    const dispatch = useDispatch();

    const taskList = tasks.length ? (
        tasks.map(task => {
            if (task.completed === false) {
                return (
                    <div className="collection-item" key={task.id}>
                        <ListGroupItem action variant="info" onClick={() => dispatch(completeTask(task.id))}>
                            <span className="taskContent">{task.content}</span>
                            <Button variant="danger" className="deleteButton" onClick={() => dispatch(deleteTask(task.id))}>Delete</Button>
                        </ListGroupItem>
                    </div>
                )
            }
            else {
                return (
                    <div className="collection-item" key={task.id}>
                        <ListGroupItem action variant="success" onClick={() => {dispatch(completeTask(task.id))}}>
                            <span className="taskContent">{task.content}</span>
                            <Button variant="danger" className="deleteButton" onClick={() => {dispatch(deleteTask(task.id))}}>Delete</Button>
                        </ListGroupItem>
                    </div>
                )
            }
        })
    ) : null;

    return (
        <ListGroup className="tasks collection">
            {taskList}
        </ListGroup>
    )
}

export default Tasks;