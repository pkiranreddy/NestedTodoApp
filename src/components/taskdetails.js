import React from "react";
import { useHistory } from "react-router-dom";
import { List } from "./listing/listing/listing";
import SearchIcon from "@material-ui/icons/Search";
import CalendarTodayOutlinedIcon from "@material-ui/icons/CalendarTodayOutlined";

export const TaskDetails = ({ todo, progress, done, dispatch, filter }) => {
  let date = new Date();
  let history = useHistory();

  return (
    <>
      <div className="header d-flex w-100 justify-content-between">
        <div className="dummyInputContainer">
          <SearchIcon color="disabled" />
          <input placeholder="Search Tasks by Title" className="dummyInput" />
        </div>
        <div
          className="create"
          onClick={() => history.push(history.location.pathname + "/create")}
        >
          New Task
        </div>
        <div className="date">
          <CalendarTodayOutlinedIcon className="mr-1" />
          {`${date.getDate()} - ${date.getMonth() + 1} - ${date.getFullYear()}`}
        </div>
      </div>
      <div className="tasks">
        <div className="task-field">
          <List
            header="To-Do"
            branch="todo"
            list={todo}
            bgcolor="rgb(242,201,76)"
            color="black"
            dispatch={dispatch}
            filter={filter}
          />
        </div>
        <div className="task-field">
          <List
            header="In-progress"
            branch="progress"
            list={progress}
            bgcolor="rgb(74,174,96)"
            color="white"
            dispatch={dispatch}
            filter={filter}
          />
        </div>
        <div className="task-field">
          <List
            header="Done"
            branch="done"
            list={done}
            bgcolor="rgb(47,128,237)"
            color="white"
            dispatch={dispatch}
            filter={filter}
          />
        </div>
      </div>
    </>
  );
};
