import React from "react";
import { TableCell, TableRow, IconButton } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import DeleteIcon from "@material-ui/icons/Delete";

export default props => {
  const handleChange = () => {
    props.onComplete(props.todo.id);
  };

  const handleDelete = () => {
    props.onDelete(props.todo.id);
  };

  return (
    <TableRow>
      <TableCell
        style={props.todo.complete ? { textDecoration: "line-through" } : {}}
      >
        {props.todo.name}
      </TableCell>
      <TableCell>
        <Checkbox checked={props.todo.complete} onChange={handleChange} />
      </TableCell>
      <TableCell>
        <IconButton aria-label="delete" onClick={handleDelete}>
          <DeleteIcon fontSize="small" />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};
