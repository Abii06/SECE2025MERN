import {memo} from "react"
const UpdateNumber1=({value})=>{
    return(
<div>
    <h1>Update Number 1</h1>
    <h2>Value is {value}</h2>
</div>
    )
}
export default memo(UpdateNumber1)