import React, { Component } from 'react';
import Todo from './Todo'
import NewTodoForm from './NewTodoForm';
import '../../styles/TodoList.css'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
        }
        this.create = this.create.bind(this)
        this.remove = this.remove.bind(this)
        this.edit = this.edit.bind(this)
        this.toggleCompletion = this.toggleCompletion.bind(this)
    }

    create(newTodo) {
        this.setState({ todos: [...this.state.todos, newTodo] });
    }

    remove(id) {
        this.setState({
            todos: this.state.todos.filter(t => t.id !== id)
        });
    }

    edit(id, updatedTask) {
        const updatedTodos = this.state.todos.map(todo => (
            todo.id === id
                ? { ...todo, task: updatedTask }
                : todo
        ))
        this.setState({
            todos: updatedTodos
        });
    }

    toggleCompletion(id) {
        const updatedTodos = this.state.todos.map(todo => (
            todo.id === id
                ? { ...todo, completed: !todo.completed }
                : todo
        ))
        this.setState({
            todos: updatedTodos
        });
    }

    render() {
        const todos = this.state.todos.map(
            todo => <Todo
                key={todo.id}
                id={todo.id}
                task={todo.task}
                completed={todo.completed}
                removeTodo={this.remove}
                editTodo={this.edit}
                toggleTodo={this.toggleCompletion}
            />
        )
        return (
            <div className="TodoList">
                <h1 className="TodoList-title">
                    Todo List! <span>Simple React Todo List App.</span>
                </h1>
                <NewTodoForm createTodo={this.create} />
                <ul> {todos} </ul>
            </div>
        );
    }
}

export default TodoList;