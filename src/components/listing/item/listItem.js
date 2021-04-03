import React from "react";
import { useHistory } from "react-router-dom";
import "./listItem.css";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { convertDate } from "../../util";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { useTodoState } from "../../todoState";

const Dropdown = ({ index, list, branch }) => {
  const [state, dispatch] = useTodoState();
  let history = useHistory();

  const handleDelete = e => {
    e.stopPropagation();

    dispatch({ type: `Delete ${branch}`, index: index });
  };

  const handleEdit = () => {
    history.push(`${history.location.pathname}/edit/${branch}/${index}`);
  };

  return (
    <UncontrolledDropdown className="toggle">
      <DropdownToggle className="toggle">
        <MoreVertIcon style={{ color: "black" }} />
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem onClick={e => handleEdit(e)}>
          <EditOutlinedIcon color="disabled" /> Edit
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem onClick={e => handleDelete(e)}>
          <DeleteOutlineIcon color="disabled" />
          Delete
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export const ListItem = ({ item, list, header, index, branch, filter }) => {
  let date = item.date ? convertDate(item.date) : "";
  let boolean = filter === "All" ? true : filter === item.filter ? true : false;

  return (
    boolean && (
      <div className="item-container ">
        <div className="d-flex justify-content-between mb-1">
          <div className={`filter1 ${item.filter}`}>{item.filter}</div>
          <div className="mr-1">
            <Dropdown
              item={item}
              list={list}
              index={index}
              header={header}
              branch={branch}
            />
          </div>
        </div>
        <div className="title m-1 d-flex justify-content-between">
          <div>{item.name}</div>
          <div
            className="description flex-end"
            style={{ minWidth: "50px", marginLeft: "3px" }}
          >
            {date}
          </div>
        </div>
        <div className="description m-1">{item.description}</div>
        {item?.subTasks?.map(item => (
          <div className="subtask" key={item.id}>
            <input
              type="checkbox"
              className="m-0 p-0 checkbox"
              defaultChecked={branch === "done" ? true : false}
            />
            <span className="subtask-name">{item.name}</span>
          </div>
        ))}
      </div>
    )
  );
};
