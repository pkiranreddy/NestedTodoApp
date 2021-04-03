import React from "react";

export const intialState = {
  todo: [
    {
      id: 1,
      filter: "Personal",
      name: "Dummy Task",
      description: "description",
      subTasks: [
        { id: 1, name: "subtask1" },
        { id: 2, name: "subtask2" }
      ],
      date: "2020-02-11"
    }
  ],
  progress: [
    {
      id: 1,
      filter: "Personal",
      name: "Dummy Task",
      description: "description ",
      subTasks: [
        { id: 1, name: "subtask1 " },
        { id: 2, name: "subtask2" }
      ],
      date: "2020-02-11"
    }
  ],
  done: [
    {
      id: 1,
      filter: "Personal",
      name: "Dummy Task",
      description: "description",
      subTasks: [
        { id: 1, name: "subtask1" },
        { id: 2, name: "subtask2" }
      ],
      date: "2020-02-11"
    }
  ]
};

export const reducer = (state, action) => {
  switch (action.type) {
    // Adding to branch
    case "Add todo":
      return { ...state, todo: [...state.todo, action.value] };
    case "Add progress":
      return { ...state, progress: [...state.progress, action.value] };
    case "Add done":
      return { ...state, done: [...state.done, action.value] };
    // Deleteing from branch
    case "Delete todo":
      const tasks1 = [...state.todo];
      tasks1.splice(action.index, 1);
      return { ...state, todo: [...tasks1] };
    case "Delete progress":
      const tasks2 = [...state.progress];
      tasks2.splice(action.index, 1);
      return { ...state, progress: [...tasks2] };
    case "Delete done":
      const tasks3 = [...state.done];
      tasks3.splice(action.index, 1);
      return { ...state, done: [...tasks3] };
    //Editing in branch
    case "Edit todo":
      let elemIndex = action.index;
      let newArray = [...state.todo];
      newArray[elemIndex] = {
        ...newArray[elemIndex],
        ...action.value
      };
      return { ...state, todo: newArray };

    case "Edit progress":
      let elemIndex1 = action.index;
      let newArray1 = [...state.progress];
      newArray1[elemIndex1] = {
        ...newArray1[elemIndex1],
        ...action.value
      };
      return { ...state, progress: newArray1 };
    case "Edit done":
      let elemIndex2 = action.index;
      let newArray2 = [...state.done];
      newArray2[elemIndex2] = {
        ...newArray2[elemIndex2],
        ...action.value
      };
      return { ...state, done: newArray2 };
    default:
      return { ...state };
  }
};

export const ToDoContext = React.createContext();

export const ToDoProvider = ({ children }) => (
  <ToDoContext.Provider value={React.useReducer(reducer, { ...intialState })}>
    {children}
  </ToDoContext.Provider>
);

export const useTodoState = () => React.useContext(ToDoContext);
