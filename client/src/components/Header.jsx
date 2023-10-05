import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import NavbarPlatforms from "./NavbarPlatforms";

const Header = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);

  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "", { maxAge: 1 });
    window.localStorage.removeItem("userID");
    navigate("/");
  };

  return (
    <header className={"header_home"}>
      <div className={"header-nav"}>
        <Link to="/" className="logo_gcs">
          GameCodeShop
        </Link>
        <NavbarPlatforms />
        <div className={"container_header_log_card"}>
          <a href="#"></a>
          {cookies.access_token ? (
            <div className="userConnected-menu">
              <Link to="/user-profile">
                <i className="fa-regular fa-circle-user">My Profile</i>
              </Link>

              <svg
                onClick={logout}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
              </svg>
            </div>
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
      </div>
      <div className={"container_topBanner"}>
        <div className={"container_img_topBanner"}>
          <img src="../../public/assets/fc24.jpg" alt="fc 24" />
        </div>
        <div className={"content_topBanner"}>
          <h3>EA Sports FC24</h3>
          <p>49.99€</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
