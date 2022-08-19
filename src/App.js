import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import { useState } from "react";
import Dashboard from "./Components/Dashboard/Dashboard";
import { UserProvider } from "./Components/Contexts/userContext";
function App() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegForm, setShowRegForm] = useState(false);
  return (
    <UserProvider value={{showLoginForm, setShowLoginForm,showRegForm,setShowRegForm}}>
      <Router>
        <div className="App">
          <Navbar m={0}/>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  showLoginForm={showLoginForm}
                  setShowRegForm={setShowRegForm}
                  setShowLoginForm={setShowLoginForm}
                  showRegForm={showRegForm}
                />
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
