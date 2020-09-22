import React, { Component } from 'react';
import '../../styles/Todo.css'

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            updatedTask: this.props.task,
            isEditing: false,
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.toggleEdit = this.toggleEdit.bind(this)
        this.handleTogle = this.handleTogle.bind(this)
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    handleDelete() {
        this.props.removeTodo(this.props.id)
    }

    handleUpdate(evt) {
        evt.preventDefault()
        console.log("updated");
        this.props.editTodo(this.props.id, this.state.updatedTask)
        this.toggleEdit();
    }

    handleTogle(evt) {
        console.log("toggled");
        this.props.toggleTodo(this.props.id)
    }

    toggleEdit() {
        this.setState({ isEditing: !this.state.isEditing });
    }

    render() {
        const result = this.state.isEditing
            ? (
                <div className="Todo">
                    <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
                        <input type="text" name="updatedTask" onChange={this.handleChange} value={this.state.updatedTask} />
                        <button>Save</button>
                    </form>
                </div>
            )
            : (
                <div className="Todo">
                    <li
                        onClick={this.handleTogle}
                        className={this.props.completed ? "Todo-task completed" : "Todo-task"}
                    >
                        {this.props.task}
                    </li>
                    <div className="Todo-buttons">
                        <button onClick={this.toggleEdit}>
                            <i class='fas fa-pen' />
                        </button>
                        <button onClick={this.handleDelete}>
                            <i class='fas fa-trash' />
                        </button>
                    </div>
                </div>
            )

        return (
            <div>
                { result}
            </div>
        );
    }
}

export default Todo;