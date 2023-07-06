import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Admin from '../src/pages/Admin';
import LabReq from '../src/pages/LabReq';
import TestReq from '../src/pages/TestsReq';
import Sidebar from "../src/pages/Sidebar";


function App() {

  return (

    <>

      {/* -----------------------------------------------Admin-------------------------------------------- */}

      <BrowserRouter>

        <Admin />
        {/* <Sidebar /> */}
        <Routes>
          {/* admin privileges : approve labs + patients   delete + add labs */}
          {/* <Route path="/admin" element={<Admin />} /> */}
          <Route path="/labreq" element={<LabReq />} />
          <Route path="/testreq" element={<TestReq />} />
        </Routes>

      </BrowserRouter>
    </>

  );
}

export default App;
