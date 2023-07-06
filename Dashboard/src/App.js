import { useState } from "react";
// import AboutUs from '../src/pages/AboutUs';
// import Laboratories from './pages/Laboratories';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
// import Footer from '../src/components/Footer';
// import SocialNav from "./components/Header/SocialNav";
// import SignIn from './pages/Signin';
// import Home from './pages/Home'
// import Signup from "./pages/Signup";
// import PatientProfile from "../src/pages/PatientProfile";
// import HouseCallService from "../src/pages/HouseCallService";
// import LaboratoryProfile from './pages/LaboratoryProfile';
// import TestCards from './pages/TestCards';
// import Checkout from './pages/Checkout';
// import LabPage from './pages/LabPage';
// import ContactUs from './pages/ContactUs';
// import TestDetails from './pages/TestDetails';
// import SummaryTable from './components/UI/SummaryTable';
// import LaboratoryHome from "./pages/LaboratoryHome";
import Admin from './Admin';
import LabReq from './LabReq';
import TestReq from './TestsReq';
import Sidebar from "./Sidebar";


function App() {

  return (

    <>
      {/* -----------------------------------------------User and home-------------------------------------------- */}

    



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


      {/* -----------------------------------------------Laboratory-------------------------------------------- */}

      <BrowserRouter>

        <Routes>

        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>

  );
}

export default App;
