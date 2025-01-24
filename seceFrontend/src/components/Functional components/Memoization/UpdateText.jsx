import {memo} from "react"
const UpdateNumber2=({value})=>{
    return(
<div>
    <h1>Update Number 2</h1>
    <h2>Value is {value}</h2>
</div>
    )
}
export default memo(UpdateNumber2)