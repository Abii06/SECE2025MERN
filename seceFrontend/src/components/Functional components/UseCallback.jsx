import { useState } from "react"

const UseCallback=()=>
{
    var[num,setNum]=useState(0)
    var[dark,setDark]=useState(true)
    var styling={
        backgroundColor:dark?"black":"white",
        color:dark?"white":"black"
    }
return (
    <div style={styling}>
        <button onClick={()=>setDark(dark=>!dark)}>Change Theme</button>
    <div style={{ textAlign: "center" }}>
        <h2>UseCallBack hook</h2>
        <input type="number" value={num} onChange={(e)=>setNum(e.target.value)} />
    </div>
    </div>
)
}
export default UseCallback