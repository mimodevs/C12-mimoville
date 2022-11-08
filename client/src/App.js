import React from "react";
import './App.css'; 
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
 
const App = () => {
 return (
  // This is a React fragment. It is a way to return multiple elements without wrapping them in a div.
    <> 
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/records" element={<RecordList />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
 );
};
 
export default App;