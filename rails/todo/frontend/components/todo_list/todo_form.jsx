import React from "react";
import uniqueID from "../../util/unique_id";
import {recieveTodo} from '../../actions/todo_actions';

class AddTodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {title: "", body: "" , done: "false" , id: ""};

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(e) {
        e.preventDefault();
        debugger
        const { title, body} = this.state;
        this.props.receiveTodo({
            title: title, 
            body: body,
            done: "false"
        })
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.target.value })
            
        }
    }


    render() {
        return (
            <form className="add-todo-form" onSubmit={this.handleSubmit} >
                <label>
                    Title:
                    <input type='text' onChange={this.update('title')} value={this.state.title} />
                </label>
                <label>
                    Body: 
                    <input type="text" onChange={this.update('body')}  value={this.state.body} />
                </label>
                <input type="submit" value="Add New Item"/>
            </form>
        )
    }
}


export default AddTodoForm;