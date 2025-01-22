import "../../css/Navbar.css";
import {Link} from "react-router-dom";
import {useState as UseState} from "react";
const Navbar=()=>{
    var [dropdown,showDropdown]= UseState(false)
    const toggleDropdown=()=>{
        showDropdown((dropdown)=>!dropdown);
    };
    return(
        <header>
        <nav>
<ol>
    <li><Link to="/home" className="link">Home</Link></li>
    <li><Link to="/about" className="link">About</Link></li>
    <li><Link to="/gallery" className="link">Gallery</Link></li>
    <li><Link to="/contact" className="link">Contact</Link></li>
    <div>
          <span onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>Hooks</span>
          {dropdown && (
          <ul>  
        <li><Link to="/usestate" className="Link">UseState</Link></li>
        <li><Link to="/useeffect">UseEffect</Link></li>
        </ul>)}
        </div>
        <li><Link to="/usestate" className="link">UseState</Link></li>
        <li><Link to="/useeffect" className="link">UseEffect</Link></li>
</ol>
        </nav>
        </header>
    )

}
export default Navbar;