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
    <div className="dropdown"> 
          <li onClick={toggleDropdown} onLeave={toggleDropdown} className="link">Hooks</li>
          {dropdown && (
          <ul className="dropdown-menu">  
          <li><Link to="/reactlm" className="link">ReactLifecycleMethods</Link></li>
        <li><Link to="/usestate"className="link">UseState</Link></li>
        <li><Link to="/useeffect" className="link">UseEffect</Link></li>
        <li><Link to="/usereducer" className="link">UseReducer</Link></li>
        <li><Link to="/useapi" className="link">UseEffectAPI</Link></li>
        <li><Link to="/useref" className="link">UseRef</Link></li>
        <li><Link to="/usememo" className="link">UseMemo</Link></li>
        <li><Link to="/usecallback" className="link">UseCallBack</Link></li>
        <li><Link to="/usecustom"className="link">UseLocalStorage</Link></li>
        <li><Link to="/student"className="link">Student</Link></li>
        </ul>)}
        </div>
        <div className="dropdown">
           <li onClick={toggleDropdown} onLeave={toggleDropdown} className="link">Memoization</li>
            {dropdown && (
              <ul className="dropdown-menu">
                <li><Link to="/memo" className="link">Memo</Link></li>
                <li><Link to="/lazy" className="link">LazySuspense</Link></li>
              </ul>
            )}
            </div>
        <li><Link to="/contact" className="link">Contact</Link></li>
</ol>
        </nav>
        </header>
    )

}
export default Navbar;