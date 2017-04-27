import React, { Component } from 'react';

import TodoList from './TodoList';
import AddTodo from './AddTodo';

import firebase from './Firebase';


const firebaseRef = firebase.database().ref('todos');

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
        firebaseRef.push({todo: todoToAdd});
    }

    removeTodo(todoToRemove) {
        firebaseRef.child(todoToRemove.key).remove();
    }

    
    componentWillMount() {
        firebaseRef.on('value', function (snapshot) {
            var todos = [];
            snapshot.forEach(function(childSnapshot) {
                var todo = childSnapshot.val();
                todo['key'] = childSnapshot.key;
                todos.push(todo);
            }.bind(this));
            this.setState({todos: todos});
        }.bind(this));
    }

    componentWillUnmount() {
        firebaseRef.off();
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