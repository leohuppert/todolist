import React from "react";
import TextField from "@material-ui/core/TextField";
import shortid from "shortid";

export default class TodoForm extends React.Component {
  state = {
    text: "",
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.text.length > 0) {
      this.props.onSubmit({
        id: shortid.generate(),
        name: this.state.text,
        complete: false,
      });
      this.setState({
        text: "",
      });
    }
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          label="Add a todo..."
          margin="normal"
          style={{ width: 400 }}
          name="text"
          onChange={this.handleChange}
          value={this.state.text}
        />
      </form>
    );
  }
}
