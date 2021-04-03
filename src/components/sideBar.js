import React from "react";
import SettingsPowerIcon from "@material-ui/icons/SettingsPower";
import { Avatar } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { PieCharts } from "./pieChart";
import { useWindowSize } from "./util";

export const Filter = ({ name, color, num, filter, click }) => {
  return (
    <div
      className={`m-1 ${filter === name ? "addBorder" : ""}`}
      onClick={click}
    >
      <div
        style={{ border: `1px solid ${color}`, borderRadius: "5px" }}
        className="d-flex "
      >
        <div
          style={{ backgroundColor: `${color}`, color: "white" }}
          className="p-1"
        >
          {name}
        </div>
        <div style={{ textAlign: "center" }} className="p-1">
          {num}
        </div>
      </div>
    </div>
  );
};

export const SideBar = ({ todo, progress, done, filter, setFilter }) => {
  let history = useHistory();
  const size = useWindowSize();
  let All = [...todo, ...progress, ...done];
  let AllCount = All.length;
  let PersonalCount = All.reduce(
    (acc, { filter }) => (filter === "Personal" ? ++acc : acc),
    0
  );
  let OffCount = All.reduce(
    (acc, { filter }) => (filter === "Official" ? ++acc : acc),
    0
  );
  let MiscCount = AllCount - PersonalCount - OffCount;

  return (
    <div className="side-bar">
      {/* Logout bar*/}
      <div className="logout">
        <div className="flex-grow-1">
          {size.width > 784 ? (
            <img src="./small.png" alt="" className="mt-2" />
          ) : (
            <Avatar
              alt="Kiran Reddy"
              src="../avatar.jpeg"
              className="mt-1"
              style={{ marginLeft: "12px" }}
            />
          )}
        </div>
        <div className="powerButton" onClick={() => history.replace("/login")}>
          <SettingsPowerIcon style={{ color: "white" }} />
        </div>
      </div>
      {/* Logout bar*/}

      {/* Filter*/}
      <div className="filter mt-2">
        <div className="info d-flex justify-content-center mt-2 p-1">
          <div style={{ marginRight: "5px" }}>
            <Avatar alt="Kiran Reddy" src="../avatar.jpeg" />
          </div>
          <div>
            <div>Kiran Reddy</div>
            <div style={{ color: "gray" }}>KiranReddy@todo.com</div>
          </div>
        </div>
        <div
          className="mt-4 p-2 d-flex justify-content-around flex-wrap "
          style={{ backgroundColor: "rgb(242, 242, 242)" }}
        >
          <Filter
            name="All"
            num={AllCount}
            color="rgb(45,156,219)"
            filter={filter}
            click={() => setFilter("All")}
          />
          <Filter
            name="Personal"
            num={PersonalCount}
            color="rgb(74,174,96)"
            filter={filter}
            click={() => setFilter("Personal")}
          />
          <Filter
            name="Official"
            num={OffCount}
            color="rgb(158,112,224)"
            filter={filter}
            click={() => setFilter("Official")}
          />
          <Filter
            name="Misc"
            num={MiscCount}
            color="rgb(242,153,74)"
            filter={filter}
            click={() => setFilter("Misc")}
          />
        </div>
        {history.location.pathname !== "/todo/analysis" && (
          <div className="mt-4 d-flex justify-content-center  flex-column ">
            <PieCharts width={250} />
          </div>
        )}
      </div>
    </div>
  );
};
