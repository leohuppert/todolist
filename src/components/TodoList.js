import React from "react";
import TodoForm from "./TodoForm";
import TodoTable from "./TodoTable";

export default class TodoList extends React.Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    const cachedTodos = JSON.parse(localStorage.getItem("todos"));

    this.setState({ todos: cachedTodos });
  }

  addTodo = ({ id, name, complete }) => {
    this.setState(
      {
        todos: [{ id, name, complete }, ...this.state.todos],
      },
      () => {
        localStorage.setItem("todos", JSON.stringify(this.state.todos));
      }
    );
  };

  completeTodo = id => {
    this.setState(
      state => ({
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
      }),
      () => {
        localStorage.setItem("todos", JSON.stringify(this.state.todos));
      }
    );
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
