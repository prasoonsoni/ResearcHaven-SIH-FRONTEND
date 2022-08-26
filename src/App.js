import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import { useState } from "react";
import Dashboard from "./Components/Dashboard/Dashboards/Dashboard";
import { UserProvider } from "./Components/Contexts/userContext";
import UGCDashboard from "./Components/Dashboard/Dashboards/UGCDashboard";
import ExpertDashboard from "./Components/Dashboard/Dashboards/ExpertDashboard";
function App() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegForm, setShowRegForm] = useState(false);
  return (
    <UserProvider
      value={{ showLoginForm, setShowLoginForm, showRegForm, setShowRegForm }}
    >
      <Router>
        <div className="App">
          <Navbar m={0} />
          <Routes>
            <Route index element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/dashboard/*" element={<Dashboard />} />
            <Route exact path="/dashboard/admin/*" element={<UGCDashboard />} />
            <Route exact path="/dashboard/expert/*" element={<ExpertDashboard />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
