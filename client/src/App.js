
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Categories from "./components/Categories";
import Adds from "./components/Adds";
import AddInfo from "./components/AddInfo"
import Footer from "./components/Footer";
import Header from "./components/Header"



import './css/App.css'

function App() {
  return (
    <div className='appContainer'>
    <Header />

     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Categories"element={<Categories />} />
        <Route path="/Adds" element={<Adds />} /> 
        <Route path="/AddInfo" element={<AddInfo />} /> 
      </Routes>
    <Footer/>
    </div>
  )
}

export default App;
