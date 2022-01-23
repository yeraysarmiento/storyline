import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import "./Menu.css";

function Menu() {
  let { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <header className="menu">
      <Link to="/products">
        <h1 className="heading">
          <img src={logo} alt="Logo of Storyline Shop" width="36" height="36" />
        </h1>
      </Link>
      {pathname !== "/products" && (
        <div className="menu__element">
          <FontAwesomeIcon className="menu__arrow" icon="chevron-left" />
          <button onClick={() => navigate(-1)} className="menu__goback">
            Go Back
          </button>
        </div>
      )}
    </header>
  );
}

export default Menu;
