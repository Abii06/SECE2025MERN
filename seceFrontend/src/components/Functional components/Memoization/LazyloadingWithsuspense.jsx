import {lazy,Suspense} from "react";

const LazyComponent=lazy(()=>import("../About"))
const LazyloadingWithsuspense=()=>{
    return(
        <div style={{textAlign:"center"}}> 
        <Suspense fallback={<h1>Loading...</h1>}>
            <h2> This is Lazy Loading Componeent with Suspense</h2>
            <LazyComponent/>
            </Suspense>
        </div>
    )
    
}
export default LazyloadingWithsuspense;
