import {useContext} from "react"
import {ThemeProvider} from "../Hooks/UseContext"
const ExamResults=()=>{
    const res=useContext(ThemeProvider)
    return(
        <div style={{textAlign:"center"}}>
<h2>Result Published and the SGPA {res.sgpa} and CGPA {res.cgpa}</h2>
        </div>
    )
}
export default ExamResults