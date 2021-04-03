import React, { useState } from "react";
import "./createTask.css";
import { useHistory } from "react-router-dom";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { DatePicker } from "./DatePicker";
import { Branch } from "./branch";
import { Tag } from "./tag";
import { NameDesc } from "./NameDesc";
import { SubTask } from "./SubTask";
import { PieCharts } from "../pieChart";

export const CreateTask = ({ dispatch, action, todo, progress, done }) => {
  let history = useHistory();
  let b = "",
    index;
  let list = {};
  if (action === "Edit") {
    let array = history.location.pathname.split("/");
    b = array[3];
    index = array[4];

    switch (b) {
      case "todo":
        list = { ...todo[index] };
        break;
      case "progress":
        list = { ...progress[index] };
        break;
      case "done":
        list = { ...done[index] };
        break;
      default:
        list = {};
        break;
    }
  }

  const [date, setDate] = useState(list?.date || null);
  const [name, setName] = useState(list?.name || "");
  const [desc, setDesc] = useState(list?.description || "");
  const [branch, setBranch] = useState(b);
  const [tag, setTag] = useState(list?.filter || "");
  const [subtasks, setsubTasks] = useState(list?.subTasks || []);

  const AddTask = () => {
    const task = {
      id: Math.random() * 10 * 2,
      filter: tag,
      name: name,
      description: desc,
      subTasks: [...subtasks],
      date: date
    };
    if (task.name !== "" && task.filter !== "" && branch !== "") {
      dispatch({ type: `Add ${branch}`, value: task });
      history.push("/todo");
    } else {
      alert("Please Fill Name, Branch and Tag");
    }
  };

  const EditTask = () => {
    const task = {
      id: list.id,
      filter: tag,
      name: name,
      description: desc,
      subTasks: [...subtasks],
      date: date
    };
    if (b === branch) {
      if (task.name !== "" && task.filter !== "" && branch !== "") {
        dispatch({
          type: `Edit ${branch}`,
          value: task,
          index: index
        });
        history.push("/todo");
      } else {
        alert("Please Fill Name, Branch and Tag");
      }
    } else {
      if (task.name !== "" && task.filter !== "" && branch !== "") {
        dispatch({ type: `Delete ${b}`, index: index });
        dispatch({ type: `Add ${branch}`, value: task });
        history.push("/todo");
      } else {
        alert("Please Fill Name, Branch and Tag");
      }
    }
  };

  return (
    <div className="create-container">
      {/*Header */}
      <div className="create-header">
        <div
          onClick={() => history.push("/todo")}
          style={{ marginRight: "10px", cursor: "pointer" }}
        >
          <KeyboardBackspaceIcon />
        </div>
        <div>{action !== "Analytics" ? `${action} Task` : `${action}`}</div>
      </div>
      {/*Body */}
      {history.location.pathname !== "/todo/analysis" ? (
        <>
          <div className="create-body">
            {/*left */}
            <div className="left">
              <NameDesc
                setName={setName}
                setDesc={setDesc}
                name={name}
                desc={desc}
              />
              <Branch setBranch={setBranch} branch={branch} />
              <Tag setTag={setTag} tag={tag} />
              <div className="field">
                <div>Select Date</div>
                <DatePicker setDate={setDate} date={date} />
              </div>
            </div>
            {/*right */}
            <div className="right">
              <SubTask subtasks={subtasks} setsubTasks={setsubTasks} />
            </div>
          </div>
          {/*Footer */}
          <div className="d-flex field">
            <div
              className="create cancel"
              onClick={() => history.push("/todo")}
            >
              Cancel
            </div>
            <div
              className="create"
              onClick={() => (action === "Create" ? AddTask() : EditTask())}
            >
              Create
            </div>
          </div>
        </>
      ) : (
        <div className="d-flex justify-content-center align-items-center mt-4">
          <PieCharts width={400} />
        </div>
      )}
    </div>
  );
};
