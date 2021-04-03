import React from "react";
export const NameDesc = ({ setName, setDesc, name, desc }) => {
  return (
    <>
      <div className="field">
        <div>Enter Task Name</div>
        <input
          placeholder="Task Name"
          className="Title"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div className="field">
        <div>Enter Description</div>
        <textarea
          placeholder="Description"
          className="Title"
          value={desc}
          onChange={e => setDesc(e.target.value)}
        />
      </div>
    </>
  );
};
