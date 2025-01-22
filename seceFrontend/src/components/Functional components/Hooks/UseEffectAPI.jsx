import {useState,useEffect} from "react"
import axios from "axios"
const UseEffectAPI=()=>{
    var[post,setPost]=useState([])
    var [products, setProducts] = useState([]);

useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts/")
        .then((res)=>{
            console.log(res.data);
            setPost(res.data);
        })
        .catch((err)=>console.log(err));

        axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
            console.log(res.data);
            setProducts(res.data);
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
        <h3>The content inside my JSONPlaceholder API product</h3>
    <ul>
    {products.map((element)=>(
            <li key={element.id} style={{listStyle:"number"}}><img src={element.image}alt={element.title}style={{width:"200px",height:"auto"}}/>
    <p>{element.title}</p></li>
        ))}
    </ul>
</div>
    )
}
export default UseEffectAPI;

