import useLocalStorage from "./CustomHooks/SampleCustomHook"
const UseLocalStorage=()=>{
    var [text,setText]=useLocalStorage("Customer ID"," ")
    var [pass,setPass]=useLocalStorage("Password"," ")
    return(
        <div style={{textAlign:"center"}}>
<h2>Utilizing Custom Hook Created</h2>
Customer ID: <input type="text" value={text} onChange={(e) =>setText(e.target.value)} /><br/><br/>
Password: <input type="password" value={pass} onChange={(e) =>setPass(e.target.value)} />
<h3>The text is {text}</h3>
        </div>
    )
}

export default UseLocalStorage