import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { addTask } from '../../Redux/Reducer/actions';
import './AddTasks.css';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { FormControl } from 'react-bootstrap';
//import { ADD_TASK } from '../../Redux/actions';

export const AddTasks = () => {
    const [content, setContent] = useState('');
    let textInput = React.createRef();
    const dispatch = useDispatch();

    const handleSubmit = (content) => {
        dispatch(addTask(content));
        setContent('');
    }
    
    return (
        <div>
            <InputGroup class="userInput">
                <FormControl
                    placeholder="Enter task" aria-label="Enter task" aria-describedby="basic-addon1" ref={textInput} onChange={() => setContent(textInput.current.value)} value={content}
                />
                <InputGroup.Append>
                    <Button variant="success" onClick={() => handleSubmit(content)}>Enter</Button>
                </InputGroup.Append>
            </InputGroup><br></br><br></br>
        </div>
    )
}

// export class AddTasks extends React.Component {
//     constructor() {
//         super();
//         this.textInput = React.createRef();
//         this.state = {
//             content: ''
//         }
//     }

//     handleChange = () => {
//         this.setState({
//             content: this.textInput.current.value
//         })
//     }

//     handleSubmit = () => {
//         if (this.state.content) {
//             this.props.addTask(this.state.content);
//             this.setState({
//                 content: ''
//             })
//         }
//     }

//     render() {
//         return(
//             <div>
//                 <InputGroup class="userInput">
//                     <FormControl
//                         placeholder="Enter task" aria-label="Enter task" aria-describedby="basic-addon1" ref={this.textInput} onChange={this.handleChange} value={this.state.content}
//                     />
//                     <InputGroup.Append>
//                         <Button variant="success" onClick={this.handleSubmit}>Enter</Button>
//                     </InputGroup.Append>
//                 </InputGroup><br></br><br></br>
//             </div>
//         )
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addTask: (content) => { dispatch(addTask(id)) }
//     }
// }

// export default connect(null, mapDispatchToProps)(AddTasks);
//export default AddTasks;