import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import 'bootstrap-icons/font/bootstrap-icons.css';

import {BrowserRouter , Routes, Route , Link}  from "react-router-dom"



import './App.css'
import Homepage from "./pages/Homepage"
import Billing from "./components/Billing";
import Tables from "./components/Tables";
import Profile from "./components/Profile";
import Bar from "./components/Bar"
import Head from "./components/head/Head";


function App() {


  return (
    <>
    <BrowserRouter>

    
    <Routes>
      <Route path="/" element={< Homepage />} />
      <Route path="/billing" element={< Billing/>} />
      <Route path="/profile" element={< Profile/>} />
      <Route path="/tables" element={< Tables />} />


      
    </Routes>
    </BrowserRouter>
      


    </>
  )
}

export default App
