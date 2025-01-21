import ClassCompEg from "./components/Class components/ClassCompEG"
import About from "./components/Functional components/About"
import Home from "./components/Functional components/Home"
import Gallery from "./components/Functional components/Gallery"
import Contact from "./components/Functional components/Contact"
import SignUp from "./components/Functional components/Signup"
import Navbar from "./components/Functional components/Navbar"
import {BrowserRouter , Routes, Route} from "react-router-dom"
function App(){
  return(
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/gallery" element={<Gallery image="SECE LOGO" page="Gallery"/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
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