import {useState} from "react"
const UseEffect= () =>{
    var [text,setText] = useState("")
    return(
        <div style={{ textAlign: "center" }} >
            <h1>This is UseEffect Example.</h1>
            <input type="number" value={text} onChange={(e)=>setText(e.target.value)}/>
            <h4>The text is {text}</h4>
        </div>
    ) 
}
export default UseEffect;