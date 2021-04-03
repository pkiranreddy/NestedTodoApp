import React from "react";
export const Tag = ({ setTag, tag }) => {
  const checkOnlyOne = b => {
    var x = document.getElementsByClassName("check");
    var i;

    for (i = 0; i < x.length; i++) {
      if (x[i].value !== b) x[i].checked = false;
    }
    setTag(b);
  };
  return (
    <div className="field">
      <div>Select Tag</div>
      <div className="d-flex justify-content-between p-2">
        <div style={{ color: "black" }}>
          <input
            type="checkbox"
            value="Personal"
            className="check"
            checked={tag === "Personal" ? true : false}
            onChange={() => {}}
            onClick={e => checkOnlyOne(e.target.value)}
          />
          &nbsp; Personal
        </div>
        <div style={{ color: "black" }}>
          <input
            type="checkbox"
            value="Official"
            className="check"
            checked={tag === "Official" ? true : false}
            onChange={() => {}}
            onClick={e => checkOnlyOne(e.target.value)}
          />
          &nbsp; Official
        </div>
        <div style={{ color: "black" }}>
          <input
            type="checkbox"
            value="Misc"
            className="check"
            checked={tag === "Misc" ? true : false}
            onChange={() => {}}
            onClick={e => checkOnlyOne(e.target.value)}
          />{" "}
          &nbsp;Misc
        </div>
      </div>
    </div>
  );
};
