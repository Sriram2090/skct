import { useState } from "react"

const Action1 = () => {
    const [islogged,setIslogged]=useState(true)

    if(true)
    {
        
    }
    else
    {
        
    }
    const handclick = ()=>{
        setIslogged(false)
    }
    const handle =()=>
    {
        setIslogged(true)
    }
  return (
    <div>
        <h1>This is Action1</h1>
        { islogged &&
        <form>
            <label>Email:</label>
            <input></input>
            <label>Password</label>
            <input></input>
        </form>
}
<button onClick={handclick}>close</button>
<button onClick={handle}>open</button>
    </div>
  )
}

export default Action1