
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Categories from "./components/Categories";
import Adds from "./components/Adds";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='appContainer'>
      
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Categories"element={<Categories />} />
        <Route path="/Adds" element={<Adds />} /> 
      </Routes>
    <Footer/>
    </div>
  )
}

export default App;
