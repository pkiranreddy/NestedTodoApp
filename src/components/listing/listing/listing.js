import React from "react";
import { ListItem } from "../item/listItem";
import "./listing.css";

export const List = ({
  header,
  list,
  bgcolor,
  color,
  branch,
  filter,
  search
}) => {
  return (
    <div className="field-container">
      <div
        style={{
          backgroundColor: `${bgcolor}`,
          color: `${color}`,
          height: "30px"
        }}
        className="header"
      >
        {header}
      </div>
      {list.map(
        (item, index) =>
          item.name.toLocaleLowerCase().includes(search) && (
            <ListItem
              item={item}
              key={item.id}
              list={list}
              index={index}
              header={header}
              branch={branch}
              filter={filter}
            />
          )
      )}
    </div>
  );
};
