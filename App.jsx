import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./RouterDOm/Home";
import About from "./RouterDOm/About";
import Contact from "./RouterDOm/Contact";
import Service from "./RouterDOm/Service";
import WebApp from "./SubComponent/WebApp";
import AppDevelop from "./SubComponent/AppDevelop";
import BlogDetails from "./RouterDOm/BlogDetails";


export default function App() {
 return (
      <div>
      <BrowserRouter>
        <div className="menu">
          <Link to="">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/Service">Service</Link>
        </div>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Service" element={<Service />}>
            <Route path="" element={<WebApp />} />
            <Route path="appdevelopment" element={<AppDevelop />} />
          </Route>
          <Route path="/blogs/:id" element={<BlogDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}