import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import "./Menu.css";

function Menu() {
  let { pathname } = useLocation();

  return (
    <header className="menu">
      <h1 className="heading">
        <img src={logo} alt="Logo of Storyline Shop" width="36" height="36" />
      </h1>
      {!pathname === "/products" && (
        <div className="menu__element">
          <FontAwesomeIcon className="menu__arrow" icon="chevron-left" />

          <Link to="/products">
            <p className="menu__goback">Go Back</p>
          </Link>
        </div>
      )}
    </header>
  );
}

export default Menu;
