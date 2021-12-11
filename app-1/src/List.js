import React from "react";
import Todo from "./Todo";

function List (props){
  return(
    <span>
      {props.list.map((item, index) => {
        return <Todo item={item} key={index} />
      })}
    </span>
  )
}

export default List
