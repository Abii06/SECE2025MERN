import { useState } from "react";
const Contact=()=>{
    var [num,setNum]=useState(0);
    function handleAdd(){
        return setNum(num+1)
    }
    return(
        <div>
            <h2>This is Contact Component</h2>
            <h3>This is a State Example</h3>
            <h3>Number is {num}</h3>
            <button onClick={()=>{handleAdd()}}>+</button>
        </div>
    )
}
export default Contact;