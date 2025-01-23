import {useMemo , useState} from "react"
var slowFunction=(num)=>{
    for(var slow=0;slow<100;slow++){}
    return num*2
}
const UseMemo=()=>{
    var [num,setNum]=useState(0)
    var [dark,setDark]=useState(false)
var styling={
    backgroundColor:dark?"black":"white",
    color:dark?"white":"black"
}
var doublingUpANum=useMemo(()=>{
    return slowFunction(num)
},[num])
    return(
        <div style={styling}>
            <div style={{ textAlign: "center" }}>
            <h1>UseMemo Hook</h1>
            <input type="number" value={num} onChange={(e)=>setNum(e.target.value)}/>
            <button onClick={()=>{setDark(currTheme=>!currTheme)}}>Toggle</button>
            <h3>The number is {doublingUpANum}</h3>
            </div>
        </div>
    )
}
export default UseMemo