export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const filterCompletedTodoSelector = (state) => state.todoList.completed;

export const todoListSelector = (state) => {
  const todoRemaining = state.todoList.filter((todo) => {
    console.log("ckan", todo.priority, state.filters.priority);

    if (state.filters.status === "All") {
      return state.filters.priority.length
        ? todo.name
            .toUpperCase()
            .includes(state.filters.search.toUpperCase()) &&
            state.filters.priority.includes(todo.priority)
        : todo.name.toUpperCase().includes(state.filters.search.toUpperCase());
    } 
    return state.filters.priority.length
      ? todo.name.toUpperCase().includes(state.filters.search.toUpperCase()) &&
          (state.filters.status !== "All" &&
          state.filters.status === "Completed"
            ? todo.completed
            : !todo.completed) &&
          state.filters.priority.includes(todo.priority)
      : todo.name.toUpperCase().includes(state.filters.search.toUpperCase()) &&
          (state.filters.status !== "All" &&
          state.filters.status === "Completed"
            ? todo.completed
            : !todo.completed);
  });
  return todoRemaining;
};
