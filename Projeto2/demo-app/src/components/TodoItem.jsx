import './App.css';
import React from "react";

function TodoItem({ id, item, onCheck }) {
    return (
        <>
       <li
           onClick={() => {onCheck(id)}}
        >
           {item}  
       </li>
        </>
    )
  }