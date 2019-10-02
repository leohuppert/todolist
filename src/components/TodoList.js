import React from "react";
import TodoForm from "./TodoForm";
import TodoTable from "./TodoTable";

export default class TodoList extends React.Component {
  state = {
    todos: [],
  };

  addTodo = ({ name, complete }) => {
    this.setState({
      todos: [{ name, complete }, ...this.state.todos],
    });
  };

  render() {
    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />
        <TodoTable todos={this.state.todos} />
      </div>
    );
  }
}
