import React,{useState} from "react"
const trackingButtonComponent=(Component)=>{
    return(props)=>{
        const [text,setText]=useState("")
        const [pass,setPass]=useState("")
        const handleClick=()=>{
            console.log("Logged In Fetch the  Tracking Info",props.trackingInfo)
        }
        return(
            <div style={{textAlign:"center"}}>
                Customer ID: <input type="text" value={text} onChange={(e) =>setText(e.target.value)} /><br/><br/>
                Password: <input type="password" value={pass} onChange={(e) =>setPass(e.target.value)} /><br/><br/>
            <Component {...props} onClick={handleClick}/>
            </div>
        )
    }
}
export default trackingButtonComponent