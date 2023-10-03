import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import GameForm from "./pages/newGame.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Home } from "./pages/home";
import Cart from "./pages/cart"


function App() {
  // // Current location
  const location = useLocation();

  // Array that contains all the paths where I don't want to display the Header
  const pathsWithoutHeader = ["/login", "/register", "/cart"];

  // Check if the array contains the path
  const shouldDisplayHeader = !pathsWithoutHeader.includes(location.pathname);

  return (
    <div className="App">
      {shouldDisplayHeader ? <Header /> : null}
      {/*<TopBanner/>*/}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/new-game" element={<GameForm />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
      </Routes>
      {/*<Footer></Footer>*/}
    </div>
  );
}

export default App;
