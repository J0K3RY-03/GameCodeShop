import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GameForm from "./pages/newGame.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Home } from "./pages/home";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/new-game" element={<GameForm />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
