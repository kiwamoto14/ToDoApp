import React from 'react';
import { connect } from 'react-redux';
import './AddTasks.css';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { FormControl } from 'react-bootstrap';
//import { ADD_TASK } from '../../Redux/actions';

export class AddTasks extends React.Component {
    constructor() {
        super();
        this.textInput = React.createRef();
        this.state = {
            content: ''
        }
    }

    handleChange = () => {
        this.setState({
            content: this.textInput.current.value
        })
    }

    handleSubmit = () => {
        if (this.state.content) {
            this.props.addTask(this.state.content);
            this.setState({
                content: ''
            })
        }
    }

    render() {
        return(
            <div>
                <InputGroup class="userInput">
                    <FormControl
                        placeholder="Enter task" aria-label="Enter task" aria-describedby="basic-addon1" ref={this.textInput} onChange={this.handleChange} value={this.state.content}
                    />
                    <InputGroup.Append>
                        <Button variant="success" onClick={this.handleSubmit}>Enter</Button>
                    </InputGroup.Append>
                </InputGroup><br></br><br></br>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (content) => { dispatch({type: 'ADD_TASK', content: content}) }
    }
}

export default connect(null, mapDispatchToProps)(AddTasks);
//export default AddTasks;