import React from "react";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import './styles/App.css'; 
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Edit from "./components/edit";
import Create from "./components/create";
import Admin from "./components/admin";


// import RecordPage from "./pages/RecordPage";
import Record from "./components/record";
const App = () => {
 return (
  // This is a React fragment. It is a way to return multiple elements without wrapping them in a div.
      <>
      <Nav />
      <main>
      <div className="container-fluid">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/record/:id" element={<Record />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/create" element={<Create />} />
        </Routes>
        </div>
      </main>
      <Footer />
      </>
 );
};
 
export default App;