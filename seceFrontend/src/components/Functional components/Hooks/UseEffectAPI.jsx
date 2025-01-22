import {useState,useEffect} from "react"
import axios from "axios"
const UseEffectAPI=()=>{
    var[post,setPost]=useState([])
useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts/")
        .then((res)=>{
            console.log(res.data);
            setPost(res.data);
        })
        .catch((err)=>console.log(err));
},[]);
    return(
            <div>
                <h1>This is UseEffect Example</h1>
                <h3>The content inside my JSONPlaceholder API post</h3>
            <ul>
            {post.map((element)=>(
                    <li key={element.id} style={{listStyle:"number"}}>{element.title}</li>
                ))}
            </ul>
        </div>
    )
}
export default UseEffectAPI;

