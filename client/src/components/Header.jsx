import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import NavbarPlatforms from "./NavbarPlatforms";

const Header = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);

  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("userID");
    navigate("/");
  };

  return (
    <header>
      <Link to="/" className="logo_gcs">
        GameCodeShop
      </Link>
      <NavbarPlatforms />
      <div className={"container_header_log_card"}>
        <a href="#"></a>
        {cookies.access_token ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <>
            <Link to="/cart">
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
            <Link to="/login">
              {" "}
              <i className="fa-regular fa-circle-user"></i>
            </Link>
          </>
        )}

        {/* <Link to="/new-game">Add new game</Link> */}
      </div>
    </header>
  );
};

export default Header;
