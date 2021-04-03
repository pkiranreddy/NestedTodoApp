import React from "react";
import { useHistory } from "react-router-dom";
import { PieChart, Pie, Cell } from "recharts";
import { useTodoState } from "./todoState";
import CallMadeIcon from "@material-ui/icons/CallMade";

export const PieCharts = ({ width }) => {
  const [{ todo, progress, done }] = useTodoState();
  let All = [...todo, ...progress, ...done];
  const history = useHistory();
  const data01 = [
    {
      name: "To-Do",
      value: todo.length,
      color: "rgb(242,201,76)"
    },
    {
      name: "Progress",
      value: progress.length,
      color: "rgb(74,174,96)"
    },
    {
      name: "Done",
      value: done.length,
      color: "rgb(47,128,237)"
    }
  ];
  return (
    <div className="d-flex flex-column ">
      <p className="text-center mb-0">Your Task Trends in this week</p>
      {history.location.pathname !== "/todo/analysis" && (
        <div className="d-flex flex-row-reverse mr-1">
          <div
            style={{
              cursor: "pointer",
              fontWeight: "800",
              backgroundColor: "rgb(242, 242, 242)",
              marginRight: "5px"
            }}
            onClick={() => history.push("/todo/analysis")}
          >
            <CallMadeIcon className="float-right " fontSize="small" />
          </div>
        </div>
      )}
      <div className="d-flex justify-content-center align-items-center">
        {All.length !== 0 ? (
          <PieChart width={width} height={width}>
            <Pie data={data01} dataKey="value" nameKey="name">
              {data01.map((entry, index) => (
                <Cell fill={entry.color} key={entry.name} />
              ))}
            </Pie>
          </PieChart>
        ) : (
          <div className="mt-4 mb-4 font-weight-bold text-danger">
            No Tasks Present
          </div>
        )}
      </div>

      <div className="d-flex justify-content-between flex-column ">
        <div className="d-flex justify-content-around">
          <div className="d-flex ">
            <div
              className="circle "
              style={{ backgroundColor: "rgb(242,201,76)", marginRight: "6px" }}
            ></div>
            <div>To-Do</div>
          </div>
          <div className="d-flex ">
            <div
              className="circle "
              style={{ backgroundColor: "rgb(74,174,96)", marginRight: "6px" }}
            ></div>
            <div>In-Progress</div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div
            className="circle "
            style={{ backgroundColor: "rgb(47,128,237)", marginRight: "6px" }}
          ></div>
          <div>Done</div>
        </div>
      </div>
    </div>
  );
};
