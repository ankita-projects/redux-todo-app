import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../store/actions";

class TodoList extends Component {
  render() {
    return (
      <div>
        we have currently {this.props.todo.length}
        <ul>
          {this.props.todo.map((item) => (
            <li
              key={item.id}
              onClick={() => this.props.strikeNote(item.id)}
              className={item.complete ? "todo strike" : "todo"}
            >
              {item.text}
              <span
                className="material-icons"
                onClick={() => this.props.removeNote(item.id)}
              >
                delete
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todo: state.todo_list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    strikeNote: (id) =>
      dispatch({ type: actionTypes.COMPLETE_TASK, strikedID: id }),
    removeNote: (id) => dispatch({ type: actionTypes.REMOVE_TASK, item: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);