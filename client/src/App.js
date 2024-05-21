import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Navabar from "./Components/Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <Navabar />
        </header>
        <main className="main-container-app">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
