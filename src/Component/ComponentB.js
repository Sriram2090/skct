import React from "react";
import i1 from "../Images/sk2.jpg";
const ComponentB =(props)=>{
    return (
        <>
        <img src={i1}></img>
        <h1>{props.data.find1}</h1>
        </>
    )
}
export default ComponentB;