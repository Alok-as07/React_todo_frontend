import React from "react";
import "./ListItem.css";


function ListItems(props) {
    const items=props.items;
    const Listitems=items.map((items) => {
        return( <div className="List" key="item.key">
            <p> {items.text}</p>
        </div>);
    });
    
  return (<div>{Listitems}</div>
  )
}

export default ListItems;