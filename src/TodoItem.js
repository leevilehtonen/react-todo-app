import React, { Component } from 'react';

class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.removeTodo = this.removeTodo.bind(this);
    }

    removeTodo(event) {
        this.props.onRemove(this.props.todo);
    }
    render() {
        return (
            <li className="list-group-item justify-content-between"><span>{this.props.todo}</span>
                <button type="button" className="btn btn-danger btn-sm" onClick={this.removeTodo} >X</button>
            </li>
        );
    }

}

export default TodoItem;