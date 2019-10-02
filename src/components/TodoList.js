import React from "react";
import TodoForm from "./TodoForm";
import TodoTable from "./TodoTable";

export default class TodoList extends React.Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    const cachedTodos = JSON.parse(localStorage.getItem("todos"));

    if (cachedTodos) {
      this.setState({ todos: cachedTodos });
    }
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

  deleteTodo = id => {
    this.setState(
      { todos: this.state.todos.filter(todo => todo.id !== id) },
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
    const todosLeft = this.state.todos.reduce((acc, cur) => {
      return cur.complete ? acc : acc + 1;
    }, 0);

    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />
        <TodoTable
          todos={this.state.todos}
          onComplete={this.completeTodo}
          onDelete={this.deleteTodo}
        />
        <p>Todos left : {todosLeft}</p>
      </div>
    );
  }
}
