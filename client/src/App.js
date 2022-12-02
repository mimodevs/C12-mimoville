import React from "react";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import './styles/App.css'; 
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
import Record from "./components/record";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import RecordPage from "./pages/RecordPage";

const App = () => {
 return (
  // This is a React fragment. It is a way to return multiple elements without wrapping them in a div.
      <>
      <Nav />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/records" element={<RecordList />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/list" element={<RecordPage />} />
        <Route path="/record/:id" element={<Record />} />
      </Routes>
      <Footer />
      </>
 );
};
 
export default App;