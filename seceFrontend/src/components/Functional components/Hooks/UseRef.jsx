import {useRef , useState, useEffect} from "react"
const UseRef=()=>{
    var [text,setText]=useState("");
    var prevRender=useRef("");
    useEffect(()=>{
        prevRender.current=text;
    },[text])
    return(
        <div style={{ textAlign: "center" }}>
            <h2>This page is ment for UseRef Hook</h2>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
            <h3>The text is {text}</h3>
            <h3>The previous text is {prevRender.current}</h3>
        </div>
    )
}
export default UseRef;