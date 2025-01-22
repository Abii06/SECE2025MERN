import "../../css/style.css";
import {Link} from "react-router-dom";
const Navbar1=()=>{
    return(
        <header>
        <nav>
<ol>
    <li><Link to="/signup" className="link">Sign Up</Link></li>
    <li><Link to="/login" className="link">Login</Link></li>
</ol>
        </nav>
        </header>
    )

}
export default Navbar1;