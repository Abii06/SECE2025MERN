import Invigilator from "../ContextComponents/Invigilator"
import {createContext} from "react"
export const ThemeProvider=createContext()
const Student=()=>{
return(
    <div style={{textAlign:"center"}}>
        <ThemeProvider.Provider value={{sgpa:9.5,cgpa:6.5}}>
        <h1>This is a example of UseContext Hook is an alternative for props drilling</h1>
        <h2>Students are writing exams</h2>
        <Invigilator/>
        </ThemeProvider.Provider>
    </div>
)
}
export default Student