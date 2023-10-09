import React, { useState } from "react";
import { userError } from "./user";
import "react-toastify/dist/ReactToastify.css";

const Item = ({ ele: { id, task }, setData }) => {


const[check, setCheck]= useState(false)
// console.log(check)

  const handleClick = () => {
    setData((prev) => {
      return prev.filter((ele) => {
        return ele.id !== id;
      });
    });

    userError("Deleted Sucessfully");
  };



const handleCheck = (e)=>{

  return setCheck(e.target.checked)
}



  return (
    <>
    <div className="items">
      <div className="single-item">
        <input type="checkbox" onChange={handleCheck} checked={check}/>
        <p style={{ textTransform: "capitalize", textDecoration: check ? "line-through" : "none" }}>{task}</p>

      {/* check ? linethorugh : "" */}

        <button onClick={handleClick} type="button" className="btn-remove-btn">
          Delete
        </button>
      </div>

     
    </div>
  
    </>
  );
};

export default Item;
