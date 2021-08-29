import * as actionTypes from "../actions";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TASK:
      return {
        ...state,
        todo_list: state.todo_list.concat({
          id: new Date(),
          text: action.data,
          completed: action.done,
        }),
      };
    case actionTypes.COMPLETE_TASK:
      const striked = state.todo_list.map((task) => {
        return task.id === action.strikedID
          ? { ...task, complete: !task.complete }
          : { ...task };
      });
      return {
        ...state,
        todo_list: striked,
      };
    case actionTypes.REMOVE_TASK:
      const updateArray = state.todo_list.filter(
        (remove) => remove.id !== action.item
      );
      return {
        ...state,
        todo_list: updateArray,
      };
    default:
      return state;
  }
};
const initialState = {
  todo_list: [],
};

export default reducer;