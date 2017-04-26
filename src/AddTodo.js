import React, { Component } from 'react';

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoValue: ''
        }

        this.changeTodo = this.changeTodo.bind(this);
        this.submitTodo = this.submitTodo.bind(this);
    }
    changeTodo(event) {
        this.setState({ todoValue: event.target.value });
    }

    submitTodo(event) {
        this.props.onAdd(this.state.todoValue);
        this.setState({todoValue: ''});
        event.preventDefault();
    }

    render() {
        return (
            <div className="card-footer">
                <form onSubmit={this.submitTodo}>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Add a new todo..." value={this.state.todoValue} onChange={this.changeTodo} required></input>
                        <span className="input-group-btn">
                            <button className="btn btn-primary" type="submit">Add</button>
                        </span>
                    </div>
                </form>
            </div>
        );
    }
}
export default AddTodo;