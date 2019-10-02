import React from "react";
import TodoForm from "./TodoForm";
import TodoTable from "./TodoTable";

export default class TodoList extends React.Component {
  state = {
    todos: [],
  };

  addTodo = ({ id, name, complete }) => {
    this.setState({
      todos: [{ id, name, complete }, ...this.state.todos],
    });
  };

  completeTodo = id => {
    this.setState(state => ({
      todos: state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      }),
    }));
  };

  render() {
    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />
        <TodoTable todos={this.state.todos} onComplete={this.completeTodo} />
      </div>
    );
  }
}
