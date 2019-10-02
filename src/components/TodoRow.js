import React from "react";
import { TableCell, TableRow } from "@material-ui/core";

export default props => (
  <TableRow>
    <TableCell>{props.todo.name}</TableCell>
    <TableCell>{props.todo.complete ? "X" : ""}</TableCell>
  </TableRow>
);
