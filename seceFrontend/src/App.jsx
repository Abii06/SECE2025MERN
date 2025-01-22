import About from "./components/Functional components/About"
import Home from "./components/Functional components/Home"
import Gallery from "./components/Functional components/Gallery"
import Contact from "./components/Functional components/Contact"
import SignUp from "./components/Functional components/Signup"
import Navbar from "./components/Functional components/Navbar"
import Login from "./components/Functional components/Login"
import Navbar1 from "./components/Functional components/Navbar1"
import UseState from "./components/Functional components/Hooks/UseState"
import UseEffect from "./components/Functional components/Hooks/UseEffect"
import UseEffectAPI from "./components/Functional components/Hooks/UseEffectAPI"
import {BrowserRouter , Routes, Route} from "react-router-dom"
function App(){
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<><Navbar1/><SignUp/></>}></Route>
        <Route path="/" element={<><Navbar1/><Login/></>}></Route>
      
        <Route path="/home" element={<><Navbar/><Home/></>}></Route>
        <Route path="/about" element={<><Navbar/><About/></>}></Route>
        <Route path="/gallery" element={<><Navbar/><Gallery image="SECE LOGO" page="Gallery"/></>}></Route>
        <Route path="/contact" element={<><Navbar/><Contact/></>}></Route>
        <Route path="/usestate" element={<><Navbar/><UseState/></>}></Route>
        <Route path="/useeffect" element={<><Navbar/><UseEffect/></>}></Route>
        <Route path="/useapi" element={<><Navbar/><UseEffectAPI/></>}></Route>
      </Routes>
      {/*<Home/><hr/>
      <About/><hr/>
      <h2>Without Props</h2>
      <Gallery/>
      <h2>With Props</h2>
      <Gallery image="SECE LOGO" page="Gallery"/><hr/>
      <Contact/>
      <ClassCompEg /><hr/>*/}
      </BrowserRouter>
    </div>
    
  )
}
export default App;