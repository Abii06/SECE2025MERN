import UpdateNumber1 from "./UpdateNumber";
import UpdateNumber2 from "./UpdateText";
import {useState} from "react"
const Memo=()=>{
    var [num1,setNum1]=useState(0)
    var [num2,setNum2]=useState(0)
    return(
<div>
    <h1>This page is ment for Optimization Process using React.memo</h1>
    <UpdateNumber1 value={num1}/>
    <button onClick={()=>setNum1(num1+1)}>+</button>
    <UpdateNumber2 value={num2}/>
    <button onClick={()=>setNum2(num2+1)}>+</button>
</div>
    )
}
export default Memo