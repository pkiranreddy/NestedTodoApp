import React, { useState } from "react";
import { useTodoState } from "../todoState";
import { useHistory } from "react-router-dom";
import "./todo.css";
import { TaskDetails } from "../taskdetails";
import { SideBar } from "../sideBar";
import { CreateTask } from "../createTask/createTask";
import { useWindowSize } from "../util";

export const Todo = () => {
  const [{ todo, progress, done }, dispatch] = useTodoState();
  let history = useHistory();
  const [filter, setFilter] = useState("All");
  const size = useWindowSize();
  let show = true;
  if (size.width < 784) {
    if (history.location.pathname !== "/todo") {
      show = false;
    }
  }

  return (
    <div className="container">
      {show && (
        <SideBar
          todo={todo}
          progress={progress}
          done={done}
          filter={filter}
          setFilter={setFilter}
        />
      )}

      <div className="main-bar">
        {history.location.pathname === "/todo" && (
          <TaskDetails
            todo={todo}
            progress={progress}
            done={done}
            dispatch={dispatch}
            filter={filter}
          />
        )}
        {history.location.pathname === "/todo/create" && (
          <CreateTask
            action="Create"
            todo={todo}
            progress={progress}
            done={done}
            dispatch={dispatch}
          />
        )}
        {history.location.pathname.includes("/todo/edit") && (
          <CreateTask
            action="Edit"
            todo={todo}
            progress={progress}
            done={done}
            dispatch={dispatch}
          />
        )}
        {history.location.pathname.includes("/todo/analysis") && (
          <CreateTask
            action="Analytics"
            todo={todo}
            progress={progress}
            done={done}
            dispatch={dispatch}
          />
        )}
      </div>
    </div>
  );
};
