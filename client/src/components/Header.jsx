import { Navbar } from "./Navbar";
import NavbarPlateformes from './NavbarPlateformes.jsx';

const Header = () => {
  return (
    <header>
        <a className={'logo_gcs'} href="#">GameCodeShop</a>
        <NavbarPlateformes/>
        <div className={'container_header_log_card'}>
            <a href="#"><i className="fa-solid fa-cart-shopping"></i></a>
            <a href="#"><i className="fa-regular fa-circle-user"></i></a>
        </div>
    </header>
  );
};

export default Header;
