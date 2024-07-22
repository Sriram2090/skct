import React from "react";

    import ComponentB from "./ComponentB";
const ComponentA = () =>{
    const find={find1:"siva",find2:"tamil"}
    return (
    <>
        <h1>This is component A</h1>
        <ComponentB data={find}/>
        </>
    )
}
export default ComponentA;