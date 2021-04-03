import React from "react";
export const Branch = ({ setBranch, branch }) => {
  const handleClick = (e, name) => {
    setBranch(name);
    let x = document.querySelector(".selected");
    x?.classList.remove("selected");
    e.target.classList.add("selected");
  };
  return (
    <div className="field">
      <div>Branch to</div>
      <div className="input-group">
        <span
          className={`input-group-text ${branch === "todo" ? "selected" : ""}`}
          onClick={e => handleClick(e, "todo")}
        >
          To-Do
        </span>
        <span
          className={`input-group-text ${
            branch === "progress" ? "selected" : ""
          }`}
          onClick={e => handleClick(e, "progress")}
        >
          Progress
        </span>
        <span
          className={`input-group-text ${branch === "done" ? "selected" : ""}`}
          onClick={e => handleClick(e, "done")}
        >
          Done
        </span>
      </div>
    </div>
  );
};
