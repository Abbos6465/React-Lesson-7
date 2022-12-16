import React from 'react';
import "./App.scss";
import {Routes,Route} from "react-router-dom";
import Home from "../Home";
import Countries from '../Countries';
import Country from "../../pages/Country";

const App = () => {
  return (
    <>
      <Routes>
          <Route path='/' element = {<Home/>} />
          <Route path='/countries' element = {<Countries/>} />
          <Route path='/countries/:name' element={<Country/>} />
      </Routes> 
    </>
  );
};

export default App;