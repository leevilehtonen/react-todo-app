import React, { Component } from 'react';

import TodoItem from './TodoItem';


class TodoList extends Component {

    render() {
        return (
            <ul className="list-group list-group-flush"  >
                {this.props.todos.map((todo, index) => {
                    return <TodoItem todo={todo} key={todo.key} onRemove={this.props.onRemove} />
                })}
            </ul>
        );
    }
}

export default TodoList;