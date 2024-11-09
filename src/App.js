import React from "react";
import { Routes,Route } from "react-router-dom";

import Blog from "./Components/Blog"

import './App.css'

function App() {

  return (
    <div className="App">
        
      <Routes>
        
        <Route path="blog" element={<Blog/>}/>
      
      </Routes>
    
    </div>
  )
}

export default App