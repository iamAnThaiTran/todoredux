const initState = {
  filter: {
    searc: "",
    status: "All",
    priority: [],
  },
  todoList: [
    { id: 1, name: "Learn React", completed: false, priority: "High" },
    {},
  ],
};

const rootReducer = (state = initState, action) => {
  console.log("Reducer Action:", action);
  switch (action.type) {
    case "addTodo":
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
  }
};

export default rootReducer;
