// import { Link } from "react-router-dom";
import nintendo from "../../public/assets/nintendo.png";
import { useState } from "react";

export const NavbarPlateformes = () => {
  const [style, setStyle] = useState("");
  const handleCLick = () => {
    setStyle("search_on");
    if (style === "") {
      setStyle("search_on");
    } else setStyle("");
  };

  const renderContent = () => {
    if (style !== "search_on") {
      return (
        <>
          <a className={"nav_container_section nav_pc_section"} href={"#"}>
            <i className="fa-solid fa-desktop nav_ico"></i>
            <span>PC</span>
          </a>
          <a className={"nav_container_section nav_ps_section"} href={"#"}>
            <i className="fa-brands fa-playstation nav_ico"></i>
            <span>Playstation</span>
          </a>
          <a className={"nav_container_section nav_xbox_section"} href={"#"}>
            <i className="fa-brands fa-xbox nav_ico"></i>
            <span>Xbox</span>
          </a>
          <a
            className={"nav_container_section nav_nintendo_section"}
            href={"#"}
          >
            <div className={"nintendo_img_container nav_ico"}>
              <img src={nintendo} alt="nintendo" />
            </div>
            <span>Nintendo</span>
          </a>
          <div
            className={"nav_container_section nav_plateformes_search"}
            onClick={handleCLick}
          >
            <i className="fa-solid fa-magnifying-glass gcs_search_nav"></i>
          </div>
        </>
      );
    } else {
      return (
        <>
          <form className={"nav_form_search"} action="get">
            <input
              className={"nav_input_search"}
              type="text"
              placeholder={"Search a game"}
            />
          </form>
          <a className={"nav_advanced_search"} href="#">
            Recherche avancée
          </a>
          <i
            className="fa-solid fa-xmark nav_plateformes_search_exit"
            onClick={handleCLick}
          ></i>
        </>
      );
    }
  };

  return (
      <div className={`${style} nav_container_all_plateformes`}>
        {renderContent()}
      </div>
  );
};

export default NavbarPlateformes;
