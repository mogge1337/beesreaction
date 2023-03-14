import Home from "./pages/Home";
import Info from "./pages/Info";
import Prod from "./pages/Prod";
import Korg from "./pages/Korg";
import Loggin from "./pages/Loggin";
import Logged from "./pages/Logged";

import Header from "./components/Header";
import Footer from "./components/Footer";

import {HashRouter as Router, Route, Routes} from "react-router-dom";

import './App.css';

function App() {
  return <div className="grid-container">
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/Info' element={<Info/>} />
        <Route path='/Prod' element={<Prod/>} /> 
        <Route path='/Korg' element={<Korg/>} /> 
        <Route path='/Loggin' element={<Loggin/>} /> 
        <Route path='/Logged' element={<Logged/>} /> 
      </Routes>
      <Footer/>
    </Router>
  </div>;
}

export default App;
