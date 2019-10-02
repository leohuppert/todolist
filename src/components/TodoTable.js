import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import TodoRow from "./TodoRow";

export default props => (
  <Table style={{ maxWidth: 1000 }}>
    <TableHead>
      <TableRow>
        <TableCell>Name</TableCell>
        <TableCell style={{ width: 20 }}>Done</TableCell>
        <TableCell style={{ width: 20 }}>Delete</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {props.todos.map(todo => (
        <TodoRow
          key={todo.id}
          todo={todo}
          onComplete={props.onComplete}
          onDelete={props.onDelete}
        />
      ))}
    </TableBody>
  </Table>
);
