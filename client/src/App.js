import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Profile from "./Pages/profile/Profile";
import Homepage from "./Pages/homepage/Homepage";
import Login from "./Pages/login/Login";
import Register from "./Pages/register/Register";
import Navabar from "./Components/navbar/Navbar";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Router>
        <div className="App">
          <section className="header-container">
            <header className="header">
              <Navabar isOpen={isOpen} setIsOpen={setIsOpen} />
            </header>
          </section>
          <section className="main-container">
            <main className="main">
              <Routes>
                <Route
                  path="/profile"
                  element={<Profile isOpen={isOpen} setIsOpen={setIsOpen} />}
                />
                <Route
                  path="/"
                  element={<Homepage isOpen={isOpen} setIsOpen={setIsOpen} />}
                />
                <Route
                  path="/login"
                  element={<Login isOpen={isOpen} setIsOpen={setIsOpen} />}
                />
                <Route
                  path="/register"
                  element={<Register isOpen={isOpen} setIsOpen={setIsOpen} />}
                />
              </Routes>
            </main>
          </section>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
