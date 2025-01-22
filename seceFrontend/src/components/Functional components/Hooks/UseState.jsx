import {useState} from "react";
var UseState=()=>{
    var initialValue=0;
    var[num,setNum]=useState(0)
    return(
        <div style={{ textAlign: "center" }}>
        <h1>This is useState Example</h1>
        <h4>The number is {num}</h4>
        <button onClick={()=>setNum(num+1)}>+</button>
        <button onClick={()=>setNum(num-1)}>-</button><br/><br/>
        <button onDoubleClick={()=>setNum(initialValue)}>Reset</button>
        </div>
    )
}
export default UseState;