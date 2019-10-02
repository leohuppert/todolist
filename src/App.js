import React from "react";
import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <div>
      <Header />
      <Container maxWidth="sm">
        <div className="container">
          <TodoList />
        </div>
      </Container>
    </div>
  );
}

export default App;
