import Home from "./pages/Home";
import Info from "./pages/Info";
import Prod from "./pages/Prod";
import Korg from "./pages/Korg";
import Loggin from "./pages/Loggin";
import Logged from "./pages/Logged";

import Header from "./components/Header";
import Footer from "./components/Footer";

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import './App.css';

function App() {
  return <div class="grid-container">
    <Header />
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/Info" element={<Info/>} />
        <Route exact path="/Prod" element={<Prod/>} /> 
        <Route exact path="/Korg" element={<Korg/>} /> 
        <Route exact path="/Loggin" element={<Loggin/>} /> 
        <Route exact path="/Logged" element={<Logged/>} /> 
      </Routes>
    </Router>
    <Footer/>
  </div>;
}

export default App;
