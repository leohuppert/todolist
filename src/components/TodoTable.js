import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import TodoRow from "./TodoRow";

export default ({ todos, onComplete, onDelete }) => (
  <Table style={{ maxWidth: 1000 }}>
    <TableHead>
      <TableRow>
        <TableCell>Name</TableCell>
        <TableCell style={{ width: 20 }}></TableCell>
        <TableCell style={{ width: 20 }}></TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {todos.map(todo => (
        <TodoRow
          key={todo.id}
          todo={todo}
          onComplete={onComplete}
          onDelete={onDelete}
        />
      ))}
    </TableBody>
  </Table>
);
