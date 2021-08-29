import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../store/actions";

class TodoTask extends Component {
  addHandler = (e) => {
    e.preventDefault();
    this.props.addNote(e.target.note.value);
    e.target.note.value = "";
  };

  render() {
    return (
      <form onSubmit={this.addHandler}>
        <input type="text" name="note" />
        <input type="submit" value="add task" />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNote: (text) =>
      dispatch({ type: actionTypes.ADD_TASK, data: text, done: false }),
  };
};

export default connect(null, mapDispatchToProps)(TodoTask);