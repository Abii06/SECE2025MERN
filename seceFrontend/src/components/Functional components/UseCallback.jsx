import { useState } from "react"
import ListItems from "./Hooks/List"

const UseCallback=()=>
{
    var[num,setNum]=useState(0)
    var[dark,setDark]=useState(true)
    var styling={
        backgroundColor:dark?"white":"#9B7EBD",
        color:dark?"black":"white"
    }
    var getItems=()=>{
return [num+1,num+2,num+3]
    }
return (
    <div style={styling}>
    <div style={{ textAlign: "center" }}>
        <h2>UseCallBack hook</h2>
        <button onClick={()=>setDark(dark=>!dark)} className="button">Change Theme</button><br/><br/>
        <input type="number" value={num} onChange={(e)=>setNum(parseInt(e.target.value))} />
        <ListItems func={getItems}/>
    </div>
    </div>
)
}
export default UseCallback

