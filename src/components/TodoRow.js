import React from "react";
import { TableCell, TableRow } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";

export default props => {
  const handleChange = () => {
    console.log(`check ${props.todo.name}`);
    props.onComplete(props.todo.id);
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
    </TableRow>
  );
};
