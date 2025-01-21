import { useState } from "react";

const About=()=>{
    var [text,setText]=useState("Abi")
    /*function handleText(){
        setText()
    }*/
    function handleText(event){
        setText(event.target.value)
    }
    return(
        <div style={{textAlign:"center"}}>
            <h2>This is About Component</h2>
            <h2>TextArea:</h2>
            <textarea value={text} onChange={handleText}/>
            {/*<textarea value={text} onChange={(event)=>setText(event.target.value)}/>*/}
            <textarea/>
            <p>The text is {text}</p>
        </div>
    )
}
export default About;