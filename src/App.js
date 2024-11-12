
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home"
import About from "./components/About"
import Blog from "./components/Blog"
import Contact from "./components/Contact"
import Layout from "./components/Layout"
import Gallery from "./components/Gallery"
import './App.css'
import Footer from "./components/Footer"


function App() {
  return (
    <div className="App">

  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog />} />
        <Route path="layout" element={<Layout />} />
        <Route path="gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </div>
  );

}

export default App;
 