import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Profile from "./Pages/profile/Profile";
import Homepage from "./Pages/homepage/Homepage";
import Login from "./Pages/login/Login";
import Register from "./Pages/register/Register";
import Navabar from "./Components/navbar/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <section className="header-container">
            <header className="header">
              <Navabar />
            </header>
          </section>
          <section className="main-container">
            <main className="main">
              <Routes>
                <Route path="/profile" element={<Profile />} />
                <Route path="/" element={<Homepage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
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
