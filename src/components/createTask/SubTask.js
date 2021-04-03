import React from "react";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";

const SubTaskItem = ({ name, index, subtasks, setsubTasks }) => {
  const editName = e => {
    const tasks = [...subtasks];
    tasks[index].name = e.target.value;
    setsubTasks(tasks);
  };
  const deleteSubTask = () => {
    const tasks = [...subtasks];
    tasks.splice(index, 1);
    setsubTasks(tasks);
  };
  return (
    <div className="field subtask">
      <input type="checkbox" />
      <input
        className="subtask-input"
        value={name}
        onChange={e => editName(e)}
      />
      <DeleteOutlinedIcon
        color="disabled"
        onClick={() => deleteSubTask()}
        className="input-group"
      />
    </div>
  );
};

export const SubTask = ({ subtasks, setsubTasks }) => {
  const addSubTask = () => {
    const tasks = [
      ...subtasks,
      { id: Math.random() + 10 * 2, name: `Sub Task ${subtasks.length + 1}` }
    ];
    setsubTasks(tasks);
  };

  return (
    <>
      <div className="field">Sub-Tasks</div>
      {subtasks.length > 0 &&
        subtasks.map((item, index) => (
          <SubTaskItem
            name={item.name}
            key={item.id}
            index={index}
            subtasks={subtasks}
            setsubTasks={setsubTasks}
          />
        ))}

      <div onClick={() => addSubTask()} className="button field">
        + New Sub Task
      </div>
    </>
  );
};
