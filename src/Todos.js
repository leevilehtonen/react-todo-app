import React, { Component } from 'react';

import TodoList from './TodoList';
import AddTodo from './AddTodo';

class Todos extends Component {

    constructor(props) {
        super(props);

        this.state = {
            todos: []
        }
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }

    addTodo(todoToAdd) {
        this.setState({ todos: this.state.todos.concat(todoToAdd) })
    }

    removeTodo(todoToRemove) {
        var array = this.state.todos.filter(todo => { return todoToRemove !== todo });
        this.setState({todos: array});
    }

    render() {
        return (
            <div className='card'>
                <div className="card-header card-inverse">
                    <h3 className="card-title">TodoApp</h3>
                    <p className="card-text">TodoApp created using create-react-app and bootstrap</p>
                </div>
                <TodoList todos={this.state.todos} onRemove={this.removeTodo}/>
                <AddTodo onAdd={this.addTodo}/>
            </div>
        );
    }
}

export default Todos;