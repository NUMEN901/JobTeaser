import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import JobList from "./components/JobList";
import Applications from "./components/Applications";
import Profile from "./components/Profile"
import Signup from "./components/SignUp";
import NavbarDef from "./components/NavbarDefault";
import Login from "./components/Login";
import FormulaireApplication from "./components/FormulaireApplication";
import AdminCompanie from "./components/AdminCompanie";
import NavbarAdmin from "./components/NavbarAdmin";
import UserDashboard from "./components/UserDashbord";
import { Demo } from "./components/Demo";


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        
        <Route path="/Demo" element={<Demo /> }/>

      </Routes>
    </Router>
  );
};

export default App;
