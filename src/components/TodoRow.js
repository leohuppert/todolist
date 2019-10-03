import React from "react";
import { TableCell, TableRow, IconButton } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import DeleteIcon from "@material-ui/icons/Delete";

export default ({ todo, onComplete, onDelete }) => {
  const handleChange = () => {
    onComplete(todo.id);
  };

  const handleDelete = () => {
    onDelete(todo.id);
  };

  const completeStyle = {
    textDecoration: "line-through",
    color: "grey",
    transition: "text-decoration 2s",
  };

  return (
    <TableRow>
      <TableCell style={todo.complete ? completeStyle : {}}>
        {todo.name}
      </TableCell>
      <TableCell>
        <Checkbox checked={todo.complete} onChange={handleChange} />
      </TableCell>
      <TableCell>
        <IconButton aria-label="delete" onClick={handleDelete}>
          <DeleteIcon fontSize="small" />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};
