import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./Pages/homepage/Homepage";
import Login from "./Pages/login/Login";
import Register from "./Pages/register/Register";
import Navabar from "./Components/navbar/Navbar";
import "./App.css";

function App() {
  return (
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
              <Route path="/" element={<Homepage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </main>
        </section>
      </div>
    </Router>
  );
}

export default App;
