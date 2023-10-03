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
    <header className={'header_home'}>
        <div className={'header-nav'}>
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
        </div>
        <div className={'container_topBanner'}>
                <div className={'container_img_topBanner'}>
                    <img src="../../public/assets/fc24.jpg" alt="fc 24"/>
                </div>
                <div className={'content_topBanner'}>
                    <h3>EA Sports FC24</h3>
                    <p>49.99€</p>
                </div>
        </div>
    </header>
  );
};

export default Header;
