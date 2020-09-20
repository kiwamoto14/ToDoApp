import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Button from 'react-bootstrap/Button';
import './Tasks.css'

const Tasks = ({tasks,  
    deleteTask, completeTask}) => {

    const taskList = tasks.length ? (
        tasks.map(task => {
            if (task.completed === false) {
                return (
                    <div className="collection-item" key={task.id}>
                        <ListGroupItem action variant="info" onClick={() => {completeTask(task.id)}}>
                            <span className="taskContent">{task.content}</span>
                            <Button variant="danger" className="deleteButton" onClick={() => {deleteTask(task.id)}}>Delete</Button>
                        </ListGroupItem>
                    </div>
                )
            }
            else {
                return (
                    <div className="collection-item" key={task.id}>
                        <ListGroupItem action variant="success" onClick={() => {completeTask(task.id)}}>
                            <span className="taskContent">{task.content}</span>
                            <Button variant="danger" className="deleteButton" onClick={() => {deleteTask(task.id)}}>Delete</Button>
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